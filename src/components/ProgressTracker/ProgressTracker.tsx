import React from 'react';
import "./ProgressTracker.scss";

const stages = [
    {
        id: 1,
        name: "stage1",
        children: [
            {
                id: 11,
                name: "stage1-child1"
            }
        ]
    },
    {
        id: 2,
        name: "stage2",
        children: [
            {
                id: 21,
                name: "stage2-child1"
            },
            {
                id: 22,
                name: "stage2-child2"
            }
        ]
    },
    {
        id: 3,
        name: "stage3",
        children: [
            {
                id: 31,
                name: "stage3-child1"
            },
            {
                id: 32,
                name: "stage3-child2"
            }
        ]
    }
]

const getChildren = (children : any[]) => {
    return children.map(child => {
        return <div className="card child-card">{child.name}</div>
    });
}

const stageElements = () => {
    return stages.map(stage => {
        return <span className="col-2">
            <div className="card child-card">{stage.name}</div>
            {getChildren(stage.children)}
        </span>   
    });
}

const ProgressTracker: React.FC = () => {
    var style = {display:"flex", margin:65};
    return (
        <div style={style}>
            {stageElements()}
        </div>
    )
}

export default ProgressTracker;