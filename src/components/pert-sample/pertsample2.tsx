import React from 'react';

const Text = () => {
    return <text x={0} y={105} fill="black">I love SasdVG!</text>
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
    return <rect width={rectWidth} height={rectHeight} x={rectX} y={rectY} rx={5} ry={5} style={{ fill: 'cornflowerblue', stroke: 'black', strokeWidth: 2, opacity: 0.6 }} />;
}

const PertSample2: React.FC = () => {
    const rectwidth = 150, rectheight = 100;
    let count = 0, value = data[0].categoryId, defx = 0, defy = 0;
    return (
        <div style={{ margin: 100, height: '100vh' }}>
            <svg width="auto" height="auto">
                {data.map((d, index) => {
                    {
                        if (d.categoryId == value) {
                            count++
                        } else {
                            count = 1;
                            value = d.categoryId;
                        }
                        defx = (rectwidth * d.categoryId) + 50 * (d.categoryId - 1);
                        defy = 50 * (count - 1) + (rectheight * count);
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
                        const parentRight = { x: parent.x + rectwidth, y: parent.y + rectheight / 2 }
                        const childLeft = { x: child.x, y: child.y + rectheight / 2 }
                        return <line x1={parentRight.x} y1={parentRight.y} x2={childLeft.x} y2={childLeft.y} style={{ stroke: 'black', strokeWidth: 2 }} />
                    })
                }
            </svg>
        </div>
    )
}



export default PertSample2;