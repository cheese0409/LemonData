import React, { useState } from "react";
import { Row } from "react-bootstrap";
import SampleBtn from "./SampleBtn";
import Datatable from "./Datatable";

function Samples(props) {
    const samples = ["covid19", "marriage", "student", "unemployment"];
    const [data, setData] = useState(null);
    const saveChange = input => {
        setData(input.rowData);
        props.passVal(input);
    };

    return (
        <div className="d-flex flex-column align-items-center m-4">
            <Row>
                {samples.map(ele => {
                    return (
                        <SampleBtn
                            name={ele}
                            key={ele}
                            passVal={saveChange}
                        ></SampleBtn>
                    );
                })}
            </Row>
            <Row>
                {data ? (
                    <Datatable
                        header={data[0]}
                        body={data.slice(1)}
                    ></Datatable>
                ) : null}
            </Row>
        </div>
    );
}

export default Samples;
