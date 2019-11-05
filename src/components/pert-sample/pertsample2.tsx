import React from 'react';

const Text = () => {
    return <text x={0} y={105} fill="black">I love SasdVG!</text>
}

const data = [
    {
        stage: "Commissioned",
        id: 1
    },
    {
        stage: "Programming",
        id: 2
    },
    {
        stage: "Programming",
        id: 2
    },
    {
        stage: "Collection",
        id: 3
    },
    {
        stage: "Programming",
        id: 3
    }
]

const renderRect = (rectWidth: number, rectHeight: number, rectX: number, rectY: number) => {
    return <rect width={rectWidth} height={rectHeight} x={rectX} y={rectY} rx={5} ry={5} style={{ fill: 'cornflowerblue', stroke: 'black', strokeWidth: 2, opacity: 0.6 }} />;
}

const PertSample2: React.FC = () => {
    const rectwidth=150, rectheight=100;
    let count=0, value=data[0].id, defx=0, defy=0;
    return (
        <div style={{ margin: 100, height: '100vh' }}>
        <svg width="auto" height="auto">
            {data.map((d,index) => {
                {
                    if(d.id==value){
                        count++
                    }else{
                        count=1;
                        value=d.id;
                    }
                    defx=(rectwidth*d.id)+50*(d.id-1);
                    defy=50*(count-1)+(rectheight*count);
                    return <g>
                    {renderRect(rectwidth, rectheight, defx, defy)}
                    <line x1={defx+rectwidth} y1={defy+50} x2={defx+rectwidth+50} y2={defy+50} style={{ stroke: 'black', strokeWidth: 2}} />
                    </g>
                    
                }     
            }
            )}
        </svg>
        </div>
    )
}



export default PertSample2;