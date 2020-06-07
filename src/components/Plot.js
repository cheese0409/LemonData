import React, { useEffect } from "react";

import { ResponsiveBar as Bar } from "@nivo/bar";
import { ResponsiveHeatMap as Heatmap } from "@nivo/heatmap";
import { ResponsiveLine as Line } from "@nivo/line";
import { ResponsivePie as Pie } from "@nivo/pie";
import { ResponsiveScatterPlot as Scatter } from "@nivo/scatterplot";

const barData = [
	{
		country: "AD",
		"hot dog": 182,
		"hot dogColor": "hsl(176, 70%, 50%)",
		burger: 111,
		burgerColor: "hsl(267, 70%, 50%)",
		sandwich: 159,
		sandwichColor: "hsl(235, 70%, 50%)",
		kebab: 179,
		kebabColor: "hsl(312, 70%, 50%)",
		fries: 62,
		friesColor: "hsl(53, 70%, 50%)",
		donut: 18,
		donutColor: "hsl(311, 70%, 50%)"
	},
	{
		country: "AE",
		"hot dog": 139,
		"hot dogColor": "hsl(104, 70%, 50%)",
		burger: 68,
		burgerColor: "hsl(236, 70%, 50%)",
		sandwich: 198,
		sandwichColor: "hsl(308, 70%, 50%)",
		kebab: 131,
		kebabColor: "hsl(297, 70%, 50%)",
		fries: 181,
		friesColor: "hsl(298, 70%, 50%)",
		donut: 94,
		donutColor: "hsl(90, 70%, 50%)"
	},
	{
		country: "AF",
		"hot dog": 70,
		"hot dogColor": "hsl(301, 70%, 50%)",
		burger: 156,
		burgerColor: "hsl(219, 70%, 50%)",
		sandwich: 198,
		sandwichColor: "hsl(334, 70%, 50%)",
		kebab: 60,
		kebabColor: "hsl(167, 70%, 50%)",
		fries: 189,
		friesColor: "hsl(147, 70%, 50%)",
		donut: 97,
		donutColor: "hsl(321, 70%, 50%)"
	},
	{
		country: "AG",
		"hot dog": 88,
		"hot dogColor": "hsl(18, 70%, 50%)",
		burger: 129,
		burgerColor: "hsl(188, 70%, 50%)",
		sandwich: 70,
		sandwichColor: "hsl(218, 70%, 50%)",
		kebab: 70,
		kebabColor: "hsl(345, 70%, 50%)",
		fries: 171,
		friesColor: "hsl(301, 70%, 50%)",
		donut: 23,
		donutColor: "hsl(307, 70%, 50%)"
	},
	{
		country: "AI",
		"hot dog": 106,
		"hot dogColor": "hsl(104, 70%, 50%)",
		burger: 122,
		burgerColor: "hsl(196, 70%, 50%)",
		sandwich: 48,
		sandwichColor: "hsl(175, 70%, 50%)",
		kebab: 117,
		kebabColor: "hsl(169, 70%, 50%)",
		fries: 139,
		friesColor: "hsl(347, 70%, 50%)",
		donut: 138,
		donutColor: "hsl(251, 70%, 50%)"
	},
	{
		country: "AL",
		"hot dog": 100,
		"hot dogColor": "hsl(95, 70%, 50%)",
		burger: 193,
		burgerColor: "hsl(303, 70%, 50%)",
		sandwich: 94,
		sandwichColor: "hsl(97, 70%, 50%)",
		kebab: 169,
		kebabColor: "hsl(208, 70%, 50%)",
		fries: 118,
		friesColor: "hsl(324, 70%, 50%)",
		donut: 28,
		donutColor: "hsl(296, 70%, 50%)"
	},
	{
		country: "AM",
		"hot dog": 135,
		"hot dogColor": "hsl(285, 70%, 50%)",
		burger: 42,
		burgerColor: "hsl(95, 70%, 50%)",
		sandwich: 182,
		sandwichColor: "hsl(97, 70%, 50%)",
		kebab: 91,
		kebabColor: "hsl(359, 70%, 50%)",
		fries: 70,
		friesColor: "hsl(81, 70%, 50%)",
		donut: 71,
		donutColor: "hsl(98, 70%, 50%)"
	}
];

const lineData = [
	{
		id: "japan",
		color: "hsl(239, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 146
			},
			{
				x: "helicopter",
				y: 204
			},
			{
				x: "boat",
				y: 153
			},
			{
				x: "train",
				y: 214
			},
			{
				x: "subway",
				y: 188
			},
			{
				x: "bus",
				y: 209
			},
			{
				x: "car",
				y: 40
			},
			{
				x: "moto",
				y: 125
			},
			{
				x: "bicycle",
				y: 109
			},
			{
				x: "horse",
				y: 259
			},
			{
				x: "skateboard",
				y: 27
			},
			{
				x: "others",
				y: 69
			}
		]
	},
	{
		id: "france",
		color: "hsl(122, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 290
			},
			{
				x: "helicopter",
				y: 220
			},
			{
				x: "boat",
				y: 168
			},
			{
				x: "train",
				y: 29
			},
			{
				x: "subway",
				y: 272
			},
			{
				x: "bus",
				y: 64
			},
			{
				x: "car",
				y: 186
			},
			{
				x: "moto",
				y: 281
			},
			{
				x: "bicycle",
				y: 114
			},
			{
				x: "horse",
				y: 258
			},
			{
				x: "skateboard",
				y: 26
			},
			{
				x: "others",
				y: 10
			}
		]
	},
	{
		id: "us",
		color: "hsl(279, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 152
			},
			{
				x: "helicopter",
				y: 11
			},
			{
				x: "boat",
				y: 121
			},
			{
				x: "train",
				y: 129
			},
			{
				x: "subway",
				y: 216
			},
			{
				x: "bus",
				y: 195
			},
			{
				x: "car",
				y: 85
			},
			{
				x: "moto",
				y: 200
			},
			{
				x: "bicycle",
				y: 42
			},
			{
				x: "horse",
				y: 119
			},
			{
				x: "skateboard",
				y: 5
			},
			{
				x: "others",
				y: 204
			}
		]
	},
	{
		id: "germany",
		color: "hsl(342, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 166
			},
			{
				x: "helicopter",
				y: 216
			},
			{
				x: "boat",
				y: 59
			},
			{
				x: "train",
				y: 130
			},
			{
				x: "subway",
				y: 18
			},
			{
				x: "bus",
				y: 8
			},
			{
				x: "car",
				y: 267
			},
			{
				x: "moto",
				y: 11
			},
			{
				x: "bicycle",
				y: 279
			},
			{
				x: "horse",
				y: 289
			},
			{
				x: "skateboard",
				y: 175
			},
			{
				x: "others",
				y: 234
			}
		]
	},
	{
		id: "norway",
		color: "hsl(36, 70%, 50%)",
		data: [
			{
				x: "plane",
				y: 44
			},
			{
				x: "helicopter",
				y: 107
			},
			{
				x: "boat",
				y: 161
			},
			{
				x: "train",
				y: 247
			},
			{
				x: "subway",
				y: 260
			},
			{
				x: "bus",
				y: 201
			},
			{
				x: "car",
				y: 120
			},
			{
				x: "moto",
				y: 245
			},
			{
				x: "bicycle",
				y: 137
			},
			{
				x: "horse",
				y: 101
			},
			{
				x: "skateboard",
				y: 58
			},
			{
				x: "others",
				y: 19
			}
		]
	}
];

function Plot(props) {
	const {
		axis,
		margin,
		width,
		height,
		finalChoice,
		dataset,
		manipulation
	} = props;

	const handleScatterData = (inputX, inputY, data) => {
		let resultArr = [];
		for (let i = 0; i < data.length; i++) {
			if (data[i][inputX].length === 0 || data[i][inputY].length === 0) {
				continue;
			}
			resultArr.push({
				x: Number(data[i][inputX]),
				y: Number(data[i][inputY])
			});
		}
		return [{ id: inputY, data: resultArr }];
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

	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
	}

	const handleLineData = (inputX, inputY, data) => {};

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

	const handleBarData = (inputX, inputY, data, manipulation) => {
		if (inputY === null) {
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
				resultArr.push({ [name]: prop, value: resultObj[prop] });
			}
			return resultArr;
		} else if (inputY && manipulation) {
			let resultArr = [];
			let xname = inputX.name;
			let xlabels = inputX.count;
			let yname = inputY.name;
			let resultObj = {};
			resultObj = xlabels.reduce((acc, curr) => {
				acc[curr] = [];
				return acc;
			}, {});
			for (let i = 0; i < data.length; i++) {
				resultObj[data[i][xname]].push(Number(data[i][yname]));
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

	const generateColorsRange = (x, y) => {
		let sum = x.count.length * y.count.length;
		let arr = [];
		for (let i = 0; i < sum; i++) {
			arr.push(
				`rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(
					0,
					255
				)}, ${getRandomIntInclusive(0, 255)})`
			);
		}
		return arr;
	};

	switch (finalChoice) {
		case "bar":
			return (
				<Bar
					data={handleBarData(axis.X, axis.Y, dataset, manipulation)}
					indexBy={axis.X.name}
					keys={["value"]}
					margin={margin}
					width={width}
					height={height}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{
						...props.axisLeft,
						legend: axis.Y ? `${axis.Y.name}-${manipulation}` : "Count Value"
					}}
				></Bar>
			);
		case "line":
			return (
				<Line
					data={lineData}
					margin={margin}
					width={width}
					height={height}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Line>
			);
		case "heatmap":
			return (
				<Heatmap
					data={handleHeatmapData(axis.X, axis.Y, dataset)}
					indexBy={axis.Y.name}
					keys={axis.X.count}
					margin={margin}
					width={width}
					height={height}
					padding={2}
					axisRight={null}
					axisTop={null}
					colors="PRGn"
					enableLabels={true}
					labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
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
				></Pie>
			);
		case "scatter":
			return (
				<Scatter
					data={handleScatterData(axis.X.name, axis.Y.name, dataset)}
					margin={margin}
					width={width}
					height={height}
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
