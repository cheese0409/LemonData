import React from "react";
import { useSelector } from "react-redux";
import { ResponsiveBar } from "@nivo/bar";

function BarGraph(props) {
    const { data, width, height } = props;
    return <ResponsiveBar data={data} width={width} height={height} />;
}

export default BarGraph;
