import React from 'react';
import './pert.scss'
import data from './data';
import stages from './stages';
import legend from './legend'


const PertSample2: React.FC = () => {
    const rectwidth = 150, rectheight = 120, gapX = 100, gapY = 50, strokeWidth = 2, headergap = rectwidth + gapX, headerheight = 20;
    let count = 0, value = data[0].categoryId, defx = 0, defy = 0, text = null, hx = 0, hy = 0, color = '', legendx=950, legendy=0,
    legendgap=100;

    const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number, text: any, stage: string, color: string) => {
        return <svg x={rectX} y={rectY} fill='pink' >

            <rect width={rectWidth} height={rectHeight}></rect>
            <rect onClick={() => alert('hey')} width={rectWidth - strokeWidth} height={rectHeight / 3 - strokeWidth} x={strokeWidth} y={strokeWidth}
                style={{ fill: color, stroke: 'black', strokeWidth: strokeWidth, opacity: 1 }} />
            <rect width={rectWidth - strokeWidth} height={2 * rectHeight / 3 - strokeWidth} x={strokeWidth} y={rectHeight / 3}
                style={{ fill: 'white', stroke: 'black', strokeWidth: strokeWidth, opacity: 1 }} />
            <text x={10} y={30} overflow="hidden" fill="white">{stage}</text>
            <text x={10} y={70} overflow="hidden" fill="black">Start Date: {text.startDate}</text>
            <text x={10} y={90} overflow="hidden" fill="black">End Date: {text.endDate}</text>

            {/* <foreignObject  x={10} y={60} width={250} height={150}>
            
            <div>Info: {text.info}</div>
            </foreignObject> */}
        </svg >;
    }

    const getTargetPoint = (childRect: any, parentRight: any) => {
        const childLeft = { x: childRect.x - 10, y: childRect.y < parentRight.y ? childRect.y + (2 * rectheight / 3) : childRect.y + rectheight / 2 }
        const childTop = { x: childRect.x + rectwidth / 3, y: childRect.y - 8 }
        const childBottom = { x: childRect.x + rectwidth / 8, y: childRect.y + rectheight + 8 }
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

    const header = (header: string, x: number, y: number) => {
        return <text id="headers" x={x} y={y} fill="black">{header}</text>
    }

    const colorLegend = (color: string, state: string, x: number, y: number) => {
        return <g><rect width={20} height={10} x={x} y={y}
        style={{ fill: color }} />
        <text x={x+20} y={y} fill="black">{state}</text>
        </g>
    }
    

    return (
        <div style={{ margin: 0, height: '100vh', width: '100vw', overflow: 'scroll' }}>
            <svg width="120vw" height="100vh" overflow='visible'>
                {
                    legend.map((l)=>{
                        legendx=legendx+legendgap;
                        legendy=650;
                        return colorLegend(l.color, l.stage, legendx, legendy);
                    })
                }
                {
                    stages.map((s, index) => {
                        hy = rectheight - headerheight;
                        if (index == 0) {
                            hx = rectwidth;
                            return header(s, hx, hy);
                        } else {
                            hx = hx + gapX + rectwidth;
                            console.log(index)
                            return header(s, hx, hy);
                        }
                    })
                }
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
                        if (d.status === 'completed') {
                            color = '#447733'
                        } else if (d.status === 'progress') {
                            color = '#FFBF00'
                        } else if (d.status === 'delayed') {
                            color = '#DD0014';
                        }
                        return <g>
                            {renderRect(rectwidth, rectheight, defx, defy, text, d.stage, color)}
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
                            const parentRight = { x: parent.x + rectwidth, y: parent.y + rectheight / 2 }
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
