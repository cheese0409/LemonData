import React from "react";

import { ResponsiveBar as Bar } from "@nivo/bar";
import { ResponsiveHeatMap as Heatmap } from "@nivo/heatmap";
import { ResponsiveLine as Line } from "@nivo/line";
import { ResponsivePie as Pie } from "@nivo/pie";
import { ResponsiveScatterPlot as Scatter } from "@nivo/scatterplot";

const detectDatatype = (val) => {
	if (!isNaN(val)) {
		return "number";
	} else if (typeof val === "string") {
		return "string";
	}
};

function Plot({ ...props }) {
	const {
		axis,
		finalChoice,
		dataset,
		manipulation,
		basicStyle,
		barStyle,
		lineStyle,
		pieStyle,
		scatterStyle,
		heatmapStyle,
		theme,
		filtering
	} = props;

	const { width, height, top, right, bottom, left } = basicStyle;
	const margin = {
		top,
		right,
		left,
		bottom
	};

	const handleScatterData = (inputX, inputY, data, filtering) => {
		let dataCopy = data.slice();
		let resultArr = [];
		let xname = inputX.name;
		let yname = inputY.name;

		dataCopy = dataCopy.filter(
			(ele) =>
				ele[yname].length !== 0 && detectDatatype(ele[yname]) === "number"
		);

		if (filtering.symbol && filtering.num) {
			dataCopy = dataCopy.filter((ele) => {
				return eval(`${ele[yname]}${filtering.symbol}${filtering.num}`);
			});
		}

		for (let i = 0; i < dataCopy.length; i++) {
			if (
				dataCopy[i][xname] === "" ||
				dataCopy[i][yname] === "" ||
				detectDatatype(dataCopy[i][xname]) === "string" ||
				detectDatatype(dataCopy[i][yname]) === "string"
			) {
				continue;
			} else {
				resultArr.push({
					x: Number(dataCopy[i][xname]),
					y: Number(dataCopy[i][yname])
				});
			}
		}
		return [{ id: yname, data: resultArr }];
	};

	const handleHeatmapData = (inputX, inputY, data) => {
		let resultArr = [];
		let xName = inputX.name;
		let yName = inputY.name;
		let xCount = inputX.count;
		let yCount = inputY.count;
		let resultObj = {};
		resultObj = yCount.reduce((acc, curr) => {
			acc[curr] = 0;
			return acc;
		}, {});
		for (let prop in resultObj) {
			resultObj[prop] = xCount.reduce((acc, curr) => {
				acc[curr] = 0;
				return acc;
			}, {});
		}
		for (let i = 0; i < data.length; i++) {
			resultObj[data[i][yName]][data[i][xName]]++;
		}
		for (let yprop in resultObj) {
			let temp = {};
			temp[`${yName}`] = yprop;
			for (let xprop in resultObj[yprop]) {
				temp[`${xprop}`] = resultObj[yprop][xprop];
			}
			resultArr.push(temp);
		}
		return resultArr;
	};

	const handleLineData = (inputX, inputY, data, filtering) => {
		let resultArr = [];
		let dataCopy = data.slice();
		let xname = inputX.name;
		let yname = inputY.name;
		dataCopy = dataCopy.filter(
			(ele) =>
				ele[yname].length !== 0 && detectDatatype(ele[yname]) === "number"
		);

		if (filtering.symbol && filtering.num) {
			dataCopy = dataCopy.filter((ele) => {
				return eval(`${ele[yname]}${filtering.symbol}${filtering.num}`);
			});
		}
		for (let i = 0; i < dataCopy.length; i++) {
			if (
				dataCopy[i][xname] === "" ||
				dataCopy[i][yname] === "" ||
				detectDatatype(dataCopy[i][yname]) === "string"
			) {
				continue;
			} else {
				resultArr.push({
					x: dataCopy[i][xname],
					y: Number(dataCopy[i][yname])
				});
			}
		}
		return [{ id: yname, data: resultArr }];
	};

	const handlePieData = (inputX, data) => {
		let resultArr = [];
		let name = inputX.name;
		let labels = inputX.count;
		let resultObj = {};
		resultObj = labels.reduce((acc, curr) => {
			acc[curr] = 0;
			return acc;
		}, {});
		for (let i = 0; i < data.length; i++) {
			resultObj[data[i][name]]++;
		}
		for (let prop in resultObj) {
			resultArr.push({
				id: `${prop}`,
				label: `${prop}`,
				value: resultObj[prop]
			});
		}
		return resultArr;
	};

	const handleBarData = (inputX, inputY, data, manipulation, filtering) => {
		if (inputY === null) {
			let dataCopy = data.slice();
			let resultArr = [];
			let name = inputX.name;
			let labels = inputX.count;
			let resultObj = {};
			resultObj = labels.reduce((acc, curr) => {
				acc[curr] = 0;
				return acc;
			}, {});
			for (let i = 0; i < dataCopy.length; i++) {
				resultObj[dataCopy[i][name]]++;
			}
			for (let prop in resultObj) {
				resultArr.push({ [name]: prop, value: resultObj[prop] });
			}
			return resultArr;
		} else if (inputY && manipulation) {
			let dataCopy = data.slice();
			let resultArr = [];
			let xname = inputX.name;
			let yname = inputY.name;
			let resultObj = {};

			// remove y values which are not number
			dataCopy = dataCopy.filter(
				(ele) =>
					ele[yname].length !== 0 && detectDatatype(ele[yname]) === "number"
			);

			// if exists add filtering rules
			if (filtering.symbol && filtering.num) {
				dataCopy = dataCopy.filter((ele) => {
					return eval(`${ele[yname]}${filtering.symbol}${filtering.num}`);
				});
			}

			// apply new x labels
			var set = new Set();
			for (let i = 0; i < dataCopy.length; i++) {
				set.add(dataCopy[i][xname]);
			}
			let xlabels = Array.from(set);
			resultObj = xlabels.reduce((acc, curr) => {
				acc[curr] = [];
				return acc;
			}, {});

			for (let i = 0; i < dataCopy.length; i++) {
				let xprop = dataCopy[i][xname];
				resultObj[xprop].push(Number(dataCopy[i][yname]));
			}

			if (manipulation === "SUM") {
				let temp = { ...resultObj };
				for (let prop in temp) {
					temp[prop] = temp[prop].reduce((acc, cur) => {
						return acc + cur;
					});
				}
				for (let prop in temp) {
					resultArr.push({
						[xname]: prop,
						value: Math.round(temp[prop] * 100) / 100
					});
				}
				return resultArr;
			} else if (manipulation === "AVG") {
				let temp = { ...resultObj };
				for (let prop in temp) {
					temp[prop] =
						temp[prop].reduce((acc, cur) => {
							return acc + cur;
						}) / temp[prop].length;
				}
				for (let prop in temp) {
					resultArr.push({
						[xname]: prop,
						value: Math.round(temp[prop] * 100) / 100
					});
				}
				return resultArr;
			} else if (manipulation === "MAX") {
				let temp = { ...resultObj };
				for (let prop in temp) {
					temp[prop] = Math.max(...temp[prop]);
				}
				for (let prop in temp) {
					resultArr.push({
						[xname]: prop,
						value: Math.round(temp[prop] * 100) / 100
					});
				}
				return resultArr;
			} else if (manipulation === "MIN") {
				let temp = { ...resultObj };
				for (let prop in temp) {
					temp[prop] = Math.min(...temp[prop]);
				}
				for (let prop in temp) {
					resultArr.push({
						[xname]: prop,
						value: Math.round(temp[prop] * 100) / 100
					});
				}
				return resultArr;
			} else if (manipulation === "STD") {
				let temp = { ...resultObj };
				for (let prop in temp) {
					let mean =
						temp[prop].reduce((acc, cur) => {
							return acc + cur;
						}) / temp[prop].length;
					let deviations = temp[prop].map((x) => x - mean);
					let stddev = Math.sqrt(
						deviations.map((x) => x * x).reduce((x, y) => x + y) /
							(data.length - 1)
					);
					temp[prop] = stddev;
				}
				for (let prop in temp) {
					resultArr.push({
						[xname]: prop,
						value: Math.round(temp[prop] * 100) / 100
					});
				}
				return resultArr;
			}
		}
	};

	switch (finalChoice) {
		case "bar":
			return (
				<Bar
					data={handleBarData(axis.X, axis.Y, dataset, manipulation, filtering)}
					indexBy={axis.X.name}
					keys={["value"]}
					margin={margin}
					theme={theme}
					width={width}
					height={height}
					enableLabel={basicStyle.enableLabel}
					labelTextColor={basicStyle.labelTextColor}
					enableGridX={basicStyle.enableGridX}
					enableGridY={basicStyle.enableGridY}
					padding={barStyle.padding}
					borderRadius={barStyle.borderRadius}
					borderColor={barStyle.borderColor}
					borderWidth={barStyle.borderWidth}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{
						...props.axisLeft,
						legend: axis.Y
							? `${axis.Y.name}-${manipulation}`
							: `${axis.X.name}-COUNT`
					}}
				></Bar>
			);
		case "line":
			return (
				<Line
					data={handleLineData(
						axis.X,
						axis.Y,
						dataset,
						manipulation,
						filtering
					)}
					margin={margin}
					width={width}
					height={height}
					enablePointLabel={basicStyle.enableLabel}
					axisBottom={{
						...props.axisBottom,
						legend: `${axis.X.name}`,
						tickRotation: -90
					}}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
					useMesh={true}
				></Line>
			);
		case "heatmap":
			return (
				<Heatmap
					data={handleHeatmapData(axis.X, axis.Y, dataset)}
					indexBy={axis.Y.name}
					keys={axis.X.count}
					theme={theme}
					margin={margin}
					width={width}
					height={height}
					enableGridX={basicStyle.enableGridX}
					enableGridY={basicStyle.enableGridY}
					enableLabels={basicStyle.enableLabel}
					labelTextColor={basicStyle.labelTextColor}
					forceSquare={heatmapStyle.forceSquare}
					sizeVariation={heatmapStyle.sizeVariation}
					padding={heatmapStyle.padding}
					colors={heatmapStyle.colors}
					axisRight={null}
					axisTop={null}
					axisBottom={{
						...props.axisBottom,
						legend: `${axis.X.name}`,
						enable: true
					}}
					axisLeft={{
						...props.axisLeft,
						legend: `${axis.Y.name}`,
						enable: true
					}}
					animate={true}
					motionStiffness={80}
					motionDamping={9}
					hoverTarget="cell"
					cellHoverOthersOpacity={0.25}
				></Heatmap>
			);
		case "pie":
			return (
				<Pie
					data={handlePieData(axis.X, dataset)}
					margin={margin}
					width={width}
					height={height}
					enableRadialLabels={basicStyle.enableLabel}
					radialLabelsTextColor={basicStyle.labelTextColor}
					theme={theme}
				></Pie>
			);
		case "scatter":
			return (
				<Scatter
					data={handleScatterData(axis.X, axis.Y, dataset, filtering)}
					margin={margin}
					width={width}
					height={height}
					enableLabels={basicStyle.enableLabel}
					labelTextColor={basicStyle.labelTextColor}
					theme={theme}
					xScale={{
						type: "linear",
						min: "auto",
						max: "auto"
					}}
					yScale={{
						type: "linear",
						min: "auto",
						max: "auto"
					}}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Scatter>
			);
		default:
			return null;
	}
}

export default Plot;
