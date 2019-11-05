import React, { useState } from 'react';

const stages = [
    {
        id: 1,
        name: "stage1",
        children: [
            {
                id: 11,
                parentId: null,
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
                parentId: 11
            },
            {
                id: 22,
                name: "stage2-child2",
                parentId: 11
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
                parentId: 21
            },
            {
                id: 32,
                name: "stage3-child2",
                parentId: 21
            },
            {
                id: 33,
                name: "stage3-child3",
                parentId: 22
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
                parentId: 31
            }
        ]
    }
]

interface ISvgRectangle {
    x: number,
    y: number,
    width: number,
    height: number,
    gap: number
}

interface ISvgLine {
    x1: number,
    y1: number,
    x2: number,
    y2: number,
}

interface IPoint {
    x: number,
    y: number
}

const Rectangle: React.FC<ISvgRectangle> = (props) => {
    return <rect {...props} style={{ fill: "rgb(0,0,255)", strokeWidth: 1, stroke: "rgb(0,0,0)" }} />
}

const Line: React.FC<ISvgLine> = (props) => {
    return (
        <React.Fragment>
            <defs>
                <marker id="triangle" viewBox="0 0 10 10"
                    refX="1" refY="5"
                    markerUnits="strokeWidth"
                    markerWidth="10" markerHeight="10"
                    orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill="#f00" />
                </marker>
            </defs>
            <line {...props} markerEnd="url(#triangle)" style={{ stroke: "rgb(255,0,0)", strokeWidth: 2 }} />
        </React.Fragment>
    )
}

const SvgPert: React.FC = () => {

    var dimension = { x: 0, y: 0, width: 100, height: 50, gap: 50 };

    const midPoints: Map<number, IPoint> = new Map();

    const getStages = () => {
        return stages.map(stage => getChildren(stage.children));
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
            let x2 = dimension.x + dimension.width;
            let y2 = dimension.y + dimension.height;


            let point: IPoint = {
                x: x1,
                y: (y1 + y2)/2
            }

            midPoints.set(child.id, point);

            return (
                <React.Fragment>
                    <Rectangle key={child.id} x={dimension.x} y={dimension.y} width={dimension.width} height={dimension.height} gap={dimension.gap} />
                </React.Fragment>
            )
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

            dimension.x = dimension.x;
            dimension.y = (dimension.y + dimension.height) / 2;
            const midPoint = midPoints.get(child.parentId);

            return (
                <React.Fragment>{
                    midPoint &&
                    <Line key={child.id} x1={midPoint.x} y1={midPoint.y} x2={dimension.x} y2={dimension.y} />
                }
                </React.Fragment>
            )
        });
    }

    var style = { display: "flex", margin: 65 };
    return (
        <div style={style}>
            <svg width="2000" height="2000">
                {getStages()}
                {getLineStages()}
            </svg>
        </div>
    )
}

export default SvgPert;