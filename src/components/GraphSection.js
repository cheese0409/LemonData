import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import BarGraph from "./graphs/BarGraph";
import ScatterGraph from "./graphs/ScatterGraph";

function GraphSection(props) {
	const { name, rowData, jsonData } = useSelector((state) => state.dataset);
	const { X, Y } = useSelector((state) => state.axis);
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
					{/* <div style={{ height: "500px" }}>
						<ScatterGraph width={500} height={500}></ScatterGraph>
					</div> */}
				</Col>
			</Row>
		</div>
	);
}

export default GraphSection;
