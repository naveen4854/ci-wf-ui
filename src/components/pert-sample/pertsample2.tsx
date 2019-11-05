import React from 'react';

const Text = () => {
    return <text x={0} y={505} fill="black">I love SasdVG!</text>
}

const data = [
    {
        id: 0,
        stage: "Commissioned",
        categoryId: 1,
        pId: null,
        x: 0,
        y: 0
    },
    {
        id: 1,
        stage: "Programming",
        categoryId: 2,
        pId: 0,
        x: 0,
        y: 0
    },
    {
        id: 2,
        stage: "Programming",
        categoryId: 2,
        pId: 0,
        x: 0,
        y: 0
    },
    {
        id: 3,
        stage: "Collection",
        categoryId: 3,
        pId: 1,
        x: 0,
        y: 0
    },
    {
        id: 4,
        stage: "Collection",
        categoryId: 3,
        pId: 2,
        x: 0,
        y: 0
    }
]

const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number) => {
    return <svg x={rectX} y={rectY} fill='pink' >
        {/* <rect width={rectWidth} height={rectHeight}></rect> */}
        <rect width={rectWidth} height={rectHeight / 3} x={2} y={2}
            style={{ fill: '#0069d9', stroke: 'black', strokeWidth: 2, opacity: 1 }} />
        <rect width={rectWidth} height={2 * rectHeight / 3} x={2} y={rectHeight / 3 + 2}
            style={{ fill: 'white', stroke: 'black', strokeWidth: 2, opacity: 1 }} />
        <text x={10} y={50} overflow="hidden" fill="black">I love SasdVG!</text>
        <text x={10} y={150} overflow="hidden" fill="black">I love SasdVG!</text>
    </svg >;
}

const PertSample2: React.FC = () => {
    const rectwidth = 250, rectheight = 150, gapX = 100, gapY = 100;
    let count = 0, value = data[0].categoryId, defx = 0, defy = 0;
    return (
        <div style={{ margin: 0, height: '100vh' }}>
            <svg width="auto" height="auto">
                {data.map((d, index) => {
                    {
                        if (d.categoryId == value) {
                            count++
                        } else {
                            count = 1;
                            value = d.categoryId;
                        }
                        defx = (rectwidth * d.categoryId) + gapX * (d.categoryId - 1);
                        defy = gapY * (count - 1) + (rectheight * count);
                        d.x = defx; d.y = defy;
                        return <g>
                            {renderRect(rectwidth, rectheight, defx, defy)}
                        </g>
                    }
                }
                )}
                {
                    data.map((d) => {
                        if (d.pId === null)
                            return <React.Fragment></React.Fragment>
                        const child = d;
                        const parent = data.find(p => p.id === d.pId);
                        if (!parent)
                            return <React.Fragment></React.Fragment>
                        const parentRight = { x: parent.x + rectwidth + 2, y: parent.y + 2 + rectheight / 2 }
                        const childLeft = { x: child.x + 2, y: child.y + 2 + rectheight / 2 }
                        return <line x1={parentRight.x} y1={parentRight.y} x2={childLeft.x} y2={childLeft.y} style={{ stroke: 'black', strokeWidth: 2 }} />
                    })
                }

            </svg>
        </div>
    )
}



export default PertSample2;