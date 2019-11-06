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
        stage: "Programming - STG",
        categoryId: 2,
        pId: [0],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 2,
        stage: "Programming - ConfirmIt",
        categoryId: 2,
        pId: [0],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 3,
        stage: "Collection - STG",
        categoryId: 3,
        pId: [1],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 4,
        stage: "Collection- ConfirmIt",
        categoryId: 3,
        pId: [2],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 5,
        stage: "Collection- ConfirmIt",
        categoryId: 3,
        pId: [2],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    },
    {
        id: 6,
        stage: "Done - ConfirmIt",
        categoryId: 4,
        pId: [3, 4, 5],
        x: 0,
        y: 0,
        text: {
            startDate: "29-3-1993",
            endDate: "5-3-2001"
        }
    }
]

const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number, text: any, stage: string) => {
    const strokeWidth = 2;
    return <svg x={rectX} y={rectY} fill='pink' >
        <rect width={rectWidth} height={rectHeight}></rect>
        <rect onClick={() => alert('hey')} width={rectWidth - strokeWidth} height={rectHeight / 3 - strokeWidth} x={strokeWidth} y={strokeWidth}
            style={{ fill: '#0069d9', stroke: 'black', strokeWidth: strokeWidth, opacity: 1 }} />
        <rect width={rectWidth - strokeWidth} height={2 * rectHeight / 3 - strokeWidth} x={strokeWidth} y={rectHeight / 3}
            style={{ fill: 'white', stroke: 'black', strokeWidth: strokeWidth, opacity: 1 }} />
        <text x={10} y={30} overflow="hidden" fill="white">{stage}</text>
        <text x={10} y={100} overflow="hidden" fill="black">Start Date: {text.startDate}</text>
        <text x={10} y={120} overflow="hidden" fill="black">End Date: {text.endDate}</text>
    </svg >;
}

const PertSample2: React.FC = () => {
    const rectwidth = 250, rectheight = 150, gapX = 200, gapY = 100;
    let count = 0, value = data[0].categoryId, defx = 0, defy = 0, text = null;

    const getTargetPoint = (childRect: any, parentRight: any) => {
        const childLeft = { x: childRect.x - 10, y: childRect.y + rectheight / 2 }
        const childTop = { x: childRect.x + rectwidth / 3, y: childRect.y - 8 }
        const childBottom = { x: childRect.x + rectwidth / 5, y: childRect.y + rectheight + 8 }
        // const childRight = { x: childRect.x + rectwidth, y: childRect.y + rectheight / 3 };

        const childLeftDist = distance(parentRight, childLeft);
        const childTopDist = distance(parentRight, childTop);
        const childBottomDist = distance(parentRight, childBottom);
        console.log('childLeftDist', childLeftDist, 'childTopDist', childTopDist, 'childBottomDist', childBottomDist, 'xx');

        if (childLeftDist < childTopDist) {
            return childLeftDist < childBottomDist ? childLeft : childBottom;
        } else {
            return childTopDist < childBottomDist ? childTop : childBottom;
        }

        // let target = parentRight.y === childRect.y ? childLeft : childTop;
        // return target;
    }

    const distance = (p1: { x: number, y: number }, p2: { x: number, y: number }) => {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    return (
        <div style={{ margin: 0, height: '100vh', width: '100vw', overflow: 'scroll' }}>
            <svg width="200vw" height="200vh" overflow='visible'>
                {
                    data.map((d, index) => {

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
                    })
                }
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
                        return d.pId.map((p) => {
                            const parent = data.find(a => a.id === p);
                            if (!parent)
                                return <React.Fragment></React.Fragment>
                            const parentRight = { x: parent.x + rectwidth + 2, y: parent.y + 2 + rectheight / 2 }
                            let target = getTargetPoint(child, parent);

                            return <g>

                                <line x1={parentRight.x} y1={parentRight.y} markerEnd="url(#endarrow)"
                                    x2={target.x} y2={target.y} style={{ stroke: 'red', strokeWidth: 2 }} />
                            </g>
                        })
                    })
                }

            </svg>
        </div>
    )
}



export default PertSample2;
