import * as React from "react";
import { StackPanel, ComplexHierarchicalTree, randomId, TextElement, HierarchicalTree, DataBinding, DiagramComponent, SnapConstraints, Inject, DiagramTools, VerticalAlignment, HorizontalAlignment } from "@syncfusion/ej2-react-diagrams";
import { SampleBase } from './sample-base';
import { DataManager } from "@syncfusion/ej2-data";
import { pertChartData } from './diagram-data';
import { Content } from "react-bootstrap/lib/Tab";
import { DiagramTooltipModel } from "@syncfusion/ej2-diagrams/src/diagram/objects/tooltip-model";

const getTextElement = (text: string, alignment: HorizontalAlignment, width: number, valignment: VerticalAlignment = "Center") => {
    let textElement = new TextElement();
    textElement.content = text;
    textElement.id = randomId();
    textElement.width = width;
    textElement.height = 25;
    textElement.horizontalAlignment = alignment;
    textElement.verticalAlignment = valignment;
    textElement.style.strokeWidth = 1;
    textElement.style.strokeColor = "#b5b5b5";
    textElement.style.fill = "transparent";
    textElement.style.color = "#3c3c3c";
    textElement.relativeMode = "Object";
    return textElement;
}

let sDate = "startDate";
let eDate = "endDate";
let duration = "duration";

let addRows = (column: StackPanel, node: any) => {
    column.children.push(getTextElement(node.data[sDate], "Left", 70));
    column.children.push(getTextElement(node.data[duration], "Center", 30));
    column.children.push(getTextElement(node.data[eDate], "Right", 70));
};

const tooltip: DiagramTooltipModel = {
    content: "hello",
    position: "TopLeft",
    relativeMode: "Object",
    width: 60,
    height: 60,
    openOn: "Custom"
}

export class PertChart extends SampleBase {


    render() {
        return (
            <div className="control-pane">
                <div className="control-section">
                    <div style={{ width: "100%" }}>
                        <DiagramComponent id="diagram" width={"100%"} height={"499px"} dataSourceSettings={{
                            id: "id",
                            parentId: "Category",
                            dataSource: new DataManager(pertChartData),
                            doBinding: (nodeModel: any) => {
                                nodeModel["shape"] = { type: "Text" };
                            }
                        }} layout={{
                            type: "ComplexHierarchicalTree",
                            orientation: "LeftToRight",
                            verticalSpacing: 100,
                            horizontalSpacing: 70
                        }} //Sets the default values of connector
                            getConnectorDefaults={(connector: any) => {
                                connector.type = "Straight";
                                connector.style.strokeColor = "red";
                                connector.targetDecorator.width = 10;
                                connector.targetDecorator.height = 10;
                                connector.targetDecorator.style = {
                                    fill: "red",
                                    strokeColor: "#979797"
                                };
                                return connector;
                            }}
                            //used to customize template of the node.
                            setNodeTemplate={(node: any) => {
                                return getNodeTemplate(node);
                            }} tool={DiagramTools.ZoomPan}>
                            <Inject services={[
                                DataBinding,
                                HierarchicalTree,
                                ComplexHierarchicalTree
                            ]} />
                        </DiagramComponent>
                    </div>
                </div>
            </div>);
    }
}

//customization of the node template.
function getNodeTemplate(node: any) {
    let table = new StackPanel();
    table.style.fill = "#0069d9";
    table.id = randomId();
    table.orientation = "Vertical";
    let nameKey = "id";
    let stack = new StackPanel();
    stack.children = [];
    stack.id = randomId();
    stack.height = 25;
    stack.orientation = "Horizontal";
    stack.style.fill = "white";
    stack.horizontalAlignment = "Stretch";
    addRows(stack, node);
    table.children = [
        getTextElement(node.data[nameKey], "Stretch", 170, "Stretch"),
        stack,
        getTextElement(node.data[nameKey], "Stretch", 170, "Stretch"),
    ];
    // table.children[0].style.color = "white";
    // table.children[0].style.fontSize = 14;
    return table;
}

export default PertChart;