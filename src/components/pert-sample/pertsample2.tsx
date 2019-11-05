import React from 'react';
import './pert.scss'

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
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 1,
        stage: "Programming",
        categoryId: 2,
        pId: 0,
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 2,
        stage: "Programming",
        categoryId: 2,
        pId: 0,
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 3,
        stage: "Collection",
        categoryId: 3,
        pId: 1,
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 4,
        stage: "Collection",
        categoryId: 3,
        pId: 2,
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    }
]

const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number, text: any, stage: string) => {
    return <svg x={rectX} y={rectY} fill='pink' >
        {/* <rect width={rectWidth} height={rectHeight}></rect> */}
        <rect width={rectWidth} height={rectHeight / 3} x={2} y={2}
            style={{ fill: '#0069d9', stroke: 'black', strokeWidth: 2, opacity: 1 }} />
        <rect width={rectWidth} height={2 * rectHeight / 3} x={2} y={rectHeight / 3 + 2}
            style={{ fill: 'white', stroke: 'black', strokeWidth: 2, opacity: 1 }} />
        <text x={10} y={30} overflow="hidden" fill="white">{stage}</text>
        <text x={10} y={100} overflow="hidden" fill="black">Start Date: {text.startDate}</text>
        <text x={10} y={120} overflow="hidden" fill="black">End Date: {text.endDate}</text>
    </svg >;
}

const PertSample2: React.FC = () => {
    const rectwidth = 250, rectheight = 150, gapX = 100, gapY = 100;
    let count = 0, value = data[0].categoryId, defx = 0, defy = 0, text = null;
    return (
        <div style={{ margin: 0, height: '100vh' }}>
            <svg width="auto" height="auto">
                {data.map((d, index) => {

                    if (d.categoryId == value) {
                        count++
                    } else {
                        count = 1;
                        value = d.categoryId;
                    }
                    defx = (rectwidth * d.categoryId) + gapX * (d.categoryId - 1);
                    defy = gapY * (count - 1) + (rectheight * count);
                    text = d.text;
                    d.x = defx; d.y = defy;
                    return <g>
                        {renderRect(rectwidth, rectheight, defx, defy, text, d.stage)}
                    </g>


                }
                )}
                <defs>
                    <marker id="startarrow" markerWidth="10" markerHeight="7"
                        refX="10" refY="3.5" orient="auto">
                        <polygon points="10 0, 10 7, 0 3.5" fill="red" />
                    </marker>
                    <marker id="endarrow" markerWidth="10" markerHeight="7"
                        refX="0" refY="3.5" orient="auto" markerUnits="strokeWidth">
                        <polygon points="0 0, 5 3.5, 0 7" fill="red" />
                    </marker>
                </defs>
                {
                    data.map((d) => {
                        if (d.pId === null)
                            return <React.Fragment></React.Fragment>
                        const child = d;
                        const parent = data.find(p => p.id === d.pId);
                        if (!parent)
                            return <React.Fragment></React.Fragment>
                        const parentRight = { x: parent.x + rectwidth + 2, y: parent.y + 2 + rectheight / 2 }
                        const childLeft = { x: child.x + 2 - 10, y: child.y + 2 + rectheight / 2 }
                        const childTop = { x: child.x + 2 + rectwidth / 3, y: child.y + 2 - 8 }
                        console.log(parent, child, parent.x, child.x, 'xx')
                        let target = parent.y === child.y ? childLeft : childTop;

                        return <g>

                            <line x1={parentRight.x} y1={parentRight.y} markerEnd="url(#endarrow)"
                                x2={target.x} y2={target.y} style={{ stroke: 'red', strokeWidth: 2 }} />
                        </g>
                    })
                }

            </svg>
        </div>
    )
}



export default PertSample2;