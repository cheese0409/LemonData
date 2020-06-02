import React from "react";

function Uploader(props) {
    return (
        <div>
            <input type="file"></input>
            {props.children}
        </div>
    );
}

export default Uploader;
