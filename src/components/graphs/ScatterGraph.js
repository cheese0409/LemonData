import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

function ScatterGraph({
    data = [
        {
            id: "group A",
            data: [
                {
                    x: 62,
                    y: 54
                },
                {
                    x: 73,
                    y: 73
                },
                {
                    x: 95,
                    y: 63
                },
                {
                    x: 83,
                    y: 95
                },
                {
                    x: 52,
                    y: 109
                }
            ]
        }
    ],
    width = {},
    height
}) {
    return (
        <ResponsiveScatterPlot
            data={data}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "weight",
                legendPosition: "middle",
                legendOffset: 46
            }}
            axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "size",
                legendPosition: "middle",
                legendOffset: -60
            }}
        ></ResponsiveScatterPlot>
    );
}

export default ScatterGraph;
