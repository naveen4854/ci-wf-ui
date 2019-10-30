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
    onCountrySelected: Function,
    setContent: Function,
    countries: any[]
}

const SimpleMap: React.FC<IMyComponentState> = ({ onCountrySelected, setContent, countries }) => {
    // const [content, setContent] = useState("");

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
        }
    };
    console.log(countries)
    const getCountryStyles = (geo: any, i: number) => {
        const { NAME, ISO_A2 } = geo.properties;
        let effectiveCountry = false;
        console.log(NAME)
        if (countries.find(c => c === ISO_A2))
            effectiveCountry = true;

        let fillColor = effectiveCountry ? colors[i] : 'grey';

        return {
            default: {
                fill: state.countrySelected === NAME ? 'green' : fillColor,
                outline: "none"
            },
            hover: {
                fill: 'green',
                outline: "none"
            },
            pressed: {
                outline: "none"
            }
        }

    }
    return (
        <React.Fragment>
            <ComposableMap data-tip={state.countrySelected} showCenter={false} style={{ width: "100%", height: "auto" }}>
                <ZoomableGroup center={state.center} zoom={1}>
                    <Geographies geography={state.paths} disableOptimization>
                        {({ geographies, proj }: any) =>
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
                                        projection={proj}
                                        onMouseUp={(e) => switchPaths(e, geo, undefined)}
                                        onMouseEnter={() => {
                                            const { NAME, POP_EST } = geo.properties;
                                            // console.log(setTooltipContent, `${NAME}`, 'enter')
                                            setContent(geo.properties);
                                        }}
                                        onMouseLeave={() => {
                                            setContent({});
                                        }}
                                        style={{
                                            default: {
                                                fill: state.countrySelected === geo.properties.ISO_A2 ? 'green' : countries.find(c => c === geo.properties.ISO_A2) ? colors[i] : '#ece8e8',
                                                // fill: 'green',
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
        </React.Fragment >
    );
}

export default React.memo(SimpleMap);
