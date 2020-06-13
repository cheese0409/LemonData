import React, { useState } from "react";
import SampleBtn from "./SampleBtn";
import Datatable from "./Datatable";

function Samples(props) {
	const samples = [
		"covid19",
		"marriage",
		"student",
		"unemployment",
		"placement",
		"animalCrossing",
		"coursera"
	];
	const [data, setData] = useState(null);
	const saveChange = (input) => {
		setData(input.rowData);
		props.passVal(input);
	};

	return (
		<div className="d-flex flex-column align-items-center m-4">
			<div>
				{samples.map((ele) => {
					return (
						<SampleBtn name={ele} key={ele} passVal={saveChange}></SampleBtn>
					);
				})}
			</div>
			<div>
				{data ? (
					<Datatable
						width="1000px"
						header={data[0]}
						body={data.slice(1)}
					></Datatable>
				) : null}
			</div>
		</div>
	);
}

export default Samples;
