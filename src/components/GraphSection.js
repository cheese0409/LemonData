import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import BarGraph from "./BarGraph";
import ScatterGraph from "./ScatterGraph";

function GraphSection(props) {
    const { name, rowData, jsonData } = useSelector(state => state.dataset);
    return (
        <div>
            <h1>{`${name}`}Graph</h1>
            <Row>
                <Col>
                    {/* <div style={{ height: "500px" }}>
                        <BarGraph
                            width={500}
                            height={500}
                            data={jsonData}
                        ></BarGraph>
                    </div> */}
                    <div style={{ height: "500px" }}>
                        <ScatterGraph width={500} height={500}></ScatterGraph>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default GraphSection;
