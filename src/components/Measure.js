import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

function Measure(props) {
    const { name, rowData, jsonData } = useSelector(state => state.dataset);
    const detectDatatype = val => {
        if (!isNaN(val)) {
            return <i class="fas fa-hashtag mr-2 text-info"></i>;
        } else if (typeof val === "string") {
            return <i class="fas fa-font mr-2 text-primary"></i>;
        }
    };
    const showNamelist = obj => {
        const keys = Object.keys(obj);
        return keys.map(ele => {
            return (
                <ListGroup.Item
                    style={{ padding: "0.25rem 1.25rem" }}
                    key={ele}
                >
                    {detectDatatype(obj[ele])}
                    {ele}
                </ListGroup.Item>
            );
        });
    };
    return <ListGroup variant="flush">{showNamelist(jsonData[0])}</ListGroup>;
}

export default Measure;
