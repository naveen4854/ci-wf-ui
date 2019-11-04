import React from 'react';

const PertSample: React.FC = () => {
    return (
        <div style={{ margin: 100, height: '100vh' }}>
            <svg width="auto" height="auto" >
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
                    </marker>
                </defs>
                <line x1="300" y1="50" x2="400" y2="150" stroke="#000" stroke-width="5" marker-end="url(#arrow)" />
                <g>
                    <rect width="300" height="100" x={5} y={5} style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }} />
                    <text x={0} y={15} fill="black">I love SVG!</text>
                </g>
                <rect x={400} y={100} width="300" height="100" style={{ fill: 'red', stroke: 'black', strokeWidth: 5, opacity: 0.5 }} />
                <Text></Text>
            </svg>
        </div>
    )
}


const Text = () => {
    return <text x={0} y={105} fill="black">I love SasdVG!</text>
}
export default PertSample;