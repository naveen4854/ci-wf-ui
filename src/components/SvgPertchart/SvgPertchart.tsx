import React, { useState } from 'react';

const stages = [
    {
        id: 1,
        name: "stage1",
        children: [
            {
                id: 11,
                stage: "Protrack",
                parentId: [],
                name: "stage1-child1",
                first: true,
                status: "completed",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            }
        ]
    },
    {
        id: 2,
        name: "stage2",
        children: [
            {
                id: 21,
                stage: "STG",
                name: "stage2-child1",
                first: true,
                parentId: [11],
                status: "progress",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            },
            {
                id: 22,
                stage: "ConfirmIt",
                name: "stage2-child2",
                parentId: [11],
                status: "completed",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            },
            {
                id: 23,
                stage: "Decipher",
                name: "stage3-child3",
                parentId: [11],
                status: "delayed",
                startDate: "29-3-1993",
                endDate: "5-3-2001"
            }
        ]
    },
    {
        id: 3,
        name: "stage3",
        children: [
            {
                id: 31,
                stage: "STG",
                name: "stage3-child1",
                first: true,
                parentId: [21],
                status: "completed",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            },
            {
                id: 32,
                stage: "ConfirmIt",
                name: "stage3-child2",
                parentId: [21],
                status: "completed",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            },
            {
                id: 33,
                stage: "Decipher",
                name: "stage3-child3",
                parentId: [22],
                status: "delayed",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            }
        ]
    },
    {
        id: 4,
        name: "stage4",
        children: [
            {
                id: 41,
                name: "stage4-child1",
                stage: "ConfirmIt",
                first: true,
                parentId: [31, 32, 33],
                status: "progress",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            }
        ]
    },
    {
        id: 5,
        name: "stage5",
        children: [
            {
                id: 51,
                name: "stage5-child1",
                stage: "ConfirmIt",
                first: true,
                parentId: [41],
                status: "progress",
                startDate: "29-3-1993",
                endDate: "5-3-2001",
            }
        ]
    }
]

const stageNames = [
    "Commissioned",
    "Programming",
    "Collection",
    "QA Check",
    "Delivery"
]

const legend = [
    {
        stage: "Completed",
        color:  "#447733"
    },
    {
        stage: "In Progress",
        color:  "#FFBF00"
    },
    {
        stage: "Delayed",
        color:  "#DD0014"
    }
]

interface ISvgRectangle {
    x: number,
    y: number,
    width: number,
    height: number,
    stroke?: string,
    strokeWidth?: number,
    fill?: string,
    opacity?: number
}

interface ISvgLine {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    stroke?: string,
    strokeWidth?: number
}

interface IPoint {
    x: number,
    y: number
}

const Rectangle: React.FC<ISvgRectangle> = (props) => {
    return <rect {...props} />
}

const Line: React.FC<ISvgLine> = (props) => {
    return (
        <React.Fragment>
            <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="8.5" refY="3" orient="auto" markerUnits="strokeWidth">
                    <path d="M0,0 L0,6 L9,3 z" fill={props.stroke} />
                </marker>
            </defs>
            <line {...props} markerEnd="url(#arrow)" />
        </React.Fragment>
    )
}

const header = (header: string, x: number, y: number) => {
    return <text id="headers" x={x} y={y} width={150} height={120} fill="black">{header}</text>
}


const colorLegend = (color: string, state: string, x: number, y: number) => {
    return <g>
        <rect width={20} height={10} x={x} y={y} style={{ fill: color }} />
        <text x={x + 25} y={y+10} fill="black">{state}</text>
    </g>
}

const SvgPertchart: React.FC = () => {

    var dimension = { x: 0, y: 0, width: 150, height: 120, gap: 70 };
    const midPoints: Map<number, IPoint> = new Map();

    const getStages = () => {
        dimension = { x: 0, y: 40, width: 150, height: 120, gap: 70 };
        return stages.map(stage => getChildren(stage.children));
    }

    const getMidpoint = (x1: number, y1: number, x2: number, y2: number) => {
        let x = (x1 + x2) / 2;
        let y = (y1 + y2) / 2;
        return { x, y };
    }

    const getChildren = (children: any) => {
        return children.map((child: any, index: number) => {

            if (index === 0) {
                dimension.x = dimension.x + dimension.width + dimension.gap;
                dimension.y = 40
            } else {
                dimension.y = dimension.y + dimension.height + dimension.gap;
            }

            let x1 = dimension.x + dimension.width;
            let y1 = dimension.y;
            let y2 = dimension.y + dimension.height;

            midPoints.set(child.id, getMidpoint(x1, y1, x1, y2));

            let color;
            if (child.status === "completed") {
                color = '#447733'
            } else if (child.status === "progress") {
                color = '#FFBF00'
            } else if (child.status === "delayed") {
                color = '#DD0014';
            }

            return (
                <React.Fragment key={child.id}>
                    <Rectangle x={dimension.x} y={dimension.y} width={dimension.width}
                        height={dimension.height / 3} fill={color} stroke='black' strokeWidth={2} opacity={1} />
                    <Rectangle x={dimension.x} y={dimension.y + dimension.height / 3} width={dimension.width}
                        height={2 * dimension.height / 3} fill='white' stroke='black' strokeWidth={2} opacity={1} />

                    <text x={dimension.x + 10} y={dimension.y + 30} overflow="hidden" fill="white">{child.stage}</text>
                    <text x={dimension.x + 10} y={dimension.y + 70} overflow="hidden" fill="black">Start Date: {child.startDate} </text>
                    <text x={dimension.x + 10} y={dimension.y + 90} overflow="hidden" fill="black">End Date: {child.endDate}</text>
                </React.Fragment>
            );
        });
    }

    const getLineStages = () => {
        dimension = { x: 0, y: 0, width: 150, height: 120, gap: 70 };
        return stages.map(stage => getLineChildren(stage.children));
    }

    const getLineChildren = (children: any) => {
        return children.map((child: any, index: number) => {

            if (index === 0) {
                dimension.x = dimension.x + dimension.width + dimension.gap;
                dimension.y = 40
            } else {
                dimension.y = dimension.y + dimension.height + dimension.gap;
            }

            let target = getMidpoint(dimension.x, dimension.y, dimension.x, dimension.y + dimension.height)
            var lines: any[] = [];
            for (const pid  of child.parentId) {
                const midPoint = midPoints.get(pid);
                lines.push(midPoint && <Line key={child.id} x1={midPoint.x} y1={midPoint.y} x2={target.x} y2={target.y} stroke="black" strokeWidth={1.5} />)
            };
            return lines;
        });
    }

    const getStageNames = () => {
        dimension = { x: 0, y: 0, width: 150, height: 100, gap: 70 }
        return stageNames.map((name, index) => {
            if (index === 0) {
                dimension.x = dimension.x + 220;
            } else {
                dimension.x = dimension.x + dimension.width + dimension.gap;
            }
            return header(name, dimension.x, dimension.y + 20);
        });
    }

    const getLegends = () => {
        dimension = { x: 900, y: 0, width: 150, height: 100, gap: 100 }
        return legend.map(legend => {
            dimension.x = dimension.x + dimension.gap;
            dimension.y = 500;
            return colorLegend(legend.color, legend.stage, dimension.x, dimension.y);
        })
    }

    const style = { margin: 65 };
    return (
        <div style={style} className="svg-container">
            <svg width="1500" height="1500">
                {getStageNames()}
                {getStages()}
                {getLineStages()}
                {getLegends()}
            </svg>
        </div>
    )
}

export default SvgPertchart;