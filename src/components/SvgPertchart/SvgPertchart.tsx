import React, { useState } from 'react';

const stages = [
    {
        id: 1,
        name: "stage1",
        children: [
            {
                id: 11,
                parentId: [],
                name: "stage1-child1",
                first: true
            }
        ]
    },
    {
        id: 2,
        name: "stage2",
        children: [
            {
                id: 21,
                name: "stage2-child1",
                first: true,
                parentId: [11]
            },
            {
                id: 22,
                name: "stage2-child2",
                parentId: [11]
            }
        ]
    },
    {
        id: 3,
        name: "stage3",
        children: [
            {
                id: 31,
                name: "stage3-child1",
                first: true,
                parentId: [21]
            },
            {
                id: 32,
                name: "stage3-child2",
                parentId: [21]
            },
            {
                id: 33,
                name: "stage3-child3",
                parentId: [22]
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
                first: true,
                parentId: [31, 32, 33]
            }
        ]
    }
]

interface ISvgRectangle {
    x: number,
    y: number,
    width: number,
    height: number,
    stroke?: string,
    strokeWidth?: number,
    fill?: string
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

const SvgPertchart: React.FC = () => {

    var dimension = { x: 0, y: 0, width: 100, height: 50, gap: 50 };
    const midPoints: Map<number, IPoint> = new Map();

    const getStages = () => {
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
                dimension.y = 0
            } else {
                dimension.y = dimension.y + dimension.height + dimension.gap;
            }

            let x1 = dimension.x + dimension.width;
            let y1 = dimension.y;
            let y2 = dimension.y + dimension.height;

            midPoints.set(child.id, getMidpoint(x1, y1, x1, y2));

            return (<Rectangle key={child.id} x={dimension.x} y={dimension.y} width={dimension.width} height={dimension.height} fill="lightblue" />)
        });
    }

    const getLineStages = () => {
        dimension = { x: 0, y: 0, width: 100, height: 50, gap: 50 };
        return stages.map(stage => getLineChildren(stage.children));
    }

    const getLineChildren = (children: any) => {
        return children.map((child: any, index: number) => {

            if (index === 0) {
                dimension.x = dimension.x + dimension.width + dimension.gap;
                dimension.y = 0
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

    const style = { margin: 65 };
    return (
        <div style={style} className="svg-container">
            <svg width="1000" height="500">
                {getStages()}
                {getLineStages()}
            </svg>
        </div>
    )
}

export default SvgPertchart;