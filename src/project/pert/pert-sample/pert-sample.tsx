import React from 'react';

const PertSample: React.FC = () => {
    const aa = [1, 2, 3]

    const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number) => {
        return <rect width={rectWidth} height={rectHeight} x={rectX} y={rectY} rx={5} ry={5} style={{ fill: 'cornflowerblue', stroke: 'black', strokeWidth: 2, opacity: 0.6 }} />;
    }

    return (
        <div style={{ margin: 100, height: '100vh' }}>
            <svg width="auto" height="auto" >
                {
                    aa.map((a, index) => {
                        const baseX = 5, baseY = 5, rectHeight = 120, rectWidth = 200, gapX = 100, gapY = 0;

                        const rectX = baseX + (rectWidth + gapX) * index
                        const rectY = baseY + (rectHeight + gapY) * index

                        const rightVerticalCenter = { x: rectX + rectWidth, y: rectY + (rectHeight / 2) }
                        console.log(rightVerticalCenter.x, rightVerticalCenter.y, 'vert')

                        const nextRectX = baseX + (rectWidth + gapX) * (index + 1)
                        const nextRectY = baseY + (rectHeight + gapY) * (index + 1)

                        const leftVerticalCenter = { x: nextRectX, y: nextRectY + (rectHeight / 2) }
                        console.log(rightVerticalCenter.x, rightVerticalCenter.y, 'vert')

                        return <g key={index}>
                            {renderRect(rectWidth, rectHeight, rectX, rectY)}
                            < line x1={rectX} y1={rectY + 50} x2={rectX + rectWidth} y2={rectY + 50}
                                style={{ stroke: 'black', strokeWidth: 2, opacity: 0.7 }} />
                            {/* <rect width={rectWidth} height={rectHeight} x={rectX} y={rectY} style={{ fill: 'red', stroke: 'black', strokeWidth: 2, opacity: 1 }} /> */}
                            {index !== aa.length - 1 && <line x1={rightVerticalCenter.x} y1={rightVerticalCenter.y} x2={leftVerticalCenter.x} y2={leftVerticalCenter.y}
                                stroke="#000" strokeWidth="2" markerEnd="url(#arrow)" />}
                        </g>
                    })
                }
            </svg>
        </div>
    )

}


const Text = () => {
    return <text x={0} y={105} fill="black">I love SasdVG!</text>
}
export default PertSample;

