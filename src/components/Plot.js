import React, { useEffect } from "react";

import { ResponsiveBar as Bar } from "@nivo/bar";
import { ResponsiveHeatMap as Heatmap } from "@nivo/heatmap";
import { ResponsiveLine as Line } from "@nivo/line";
import { ResponsivePie as Pie } from "@nivo/pie";
import { ResponsiveScatterPlot as Scatter } from "@nivo/scatterplot";

const heatmapData = [
	{
		country: "AD",
		"hot dog": 66,
		"hot dogColor": "hsl(32, 70%, 50%)",
		burger: 95,
		burgerColor: "hsl(281, 70%, 50%)",
		sandwich: 40,
		sandwichColor: "hsl(157, 70%, 50%)",
		kebab: 8,
		kebabColor: "hsl(265, 70%, 50%)",
		fries: 23,
		friesColor: "hsl(221, 70%, 50%)",
		donut: 25,
		donutColor: "hsl(262, 70%, 50%)",
		junk: 95,
		junkColor: "hsl(342, 70%, 50%)",
		sushi: 17,
		sushiColor: "hsl(211, 70%, 50%)",
		ramen: 79,
		ramenColor: "hsl(215, 70%, 50%)",
		curry: 20,
		curryColor: "hsl(294, 70%, 50%)",
		udon: 45,
		udonColor: "hsl(329, 70%, 50%)"
	},
	{
		country: "AE",
		"hot dog": 47,
		"hot dogColor": "hsl(206, 70%, 50%)",
		burger: 5,
		burgerColor: "hsl(237, 70%, 50%)",
		sandwich: 57,
		sandwichColor: "hsl(290, 70%, 50%)",
		kebab: 97,
		kebabColor: "hsl(165, 70%, 50%)",
		fries: 44,
		friesColor: "hsl(27, 70%, 50%)",
		donut: 94,
		donutColor: "hsl(47, 70%, 50%)",
		junk: 99,
		junkColor: "hsl(291, 70%, 50%)",
		sushi: 79,
		sushiColor: "hsl(223, 70%, 50%)",
		ramen: 100,
		ramenColor: "hsl(47, 70%, 50%)",
		curry: 21,
		curryColor: "hsl(285, 70%, 50%)",
		udon: 39,
		udonColor: "hsl(114, 70%, 50%)"
	},
	{
		country: "AF",
		"hot dog": 63,
		"hot dogColor": "hsl(325, 70%, 50%)",
		burger: 10,
		burgerColor: "hsl(235, 70%, 50%)",
		sandwich: 66,
		sandwichColor: "hsl(253, 70%, 50%)",
		kebab: 5,
		kebabColor: "hsl(351, 70%, 50%)",
		fries: 46,
		friesColor: "hsl(213, 70%, 50%)",
		donut: 88,
		donutColor: "hsl(346, 70%, 50%)",
		junk: 52,
		junkColor: "hsl(333, 70%, 50%)",
		sushi: 94,
		sushiColor: "hsl(145, 70%, 50%)",
		ramen: 39,
		ramenColor: "hsl(17, 70%, 50%)",
		curry: 90,
		curryColor: "hsl(288, 70%, 50%)",
		udon: 77,
		udonColor: "hsl(262, 70%, 50%)"
	},
	{
		country: "AG",
		"hot dog": 44,
		"hot dogColor": "hsl(122, 70%, 50%)",
		burger: 63,
		burgerColor: "hsl(2, 70%, 50%)",
		sandwich: 84,
		sandwichColor: "hsl(42, 70%, 50%)",
		kebab: 61,
		kebabColor: "hsl(252, 70%, 50%)",
		fries: 12,
		friesColor: "hsl(317, 70%, 50%)",
		donut: 2,
		donutColor: "hsl(220, 70%, 50%)",
		junk: 68,
		junkColor: "hsl(75, 70%, 50%)",
		sushi: 60,
		sushiColor: "hsl(54, 70%, 50%)",
		ramen: 45,
		ramenColor: "hsl(8, 70%, 50%)",
		curry: 33,
		curryColor: "hsl(159, 70%, 50%)",
		udon: 95,
		udonColor: "hsl(274, 70%, 50%)"
	},
	{
		country: "AI",
		"hot dog": 76,
		"hot dogColor": "hsl(200, 70%, 50%)",
		burger: 84,
		burgerColor: "hsl(311, 70%, 50%)",
		sandwich: 37,
		sandwichColor: "hsl(2, 70%, 50%)",
		kebab: 75,
		kebabColor: "hsl(317, 70%, 50%)",
		fries: 22,
		friesColor: "hsl(59, 70%, 50%)",
		donut: 61,
		donutColor: "hsl(26, 70%, 50%)",
		junk: 47,
		junkColor: "hsl(40, 70%, 50%)",
		sushi: 81,
		sushiColor: "hsl(62, 70%, 50%)",
		ramen: 54,
		ramenColor: "hsl(27, 70%, 50%)",
		curry: 95,
		curryColor: "hsl(186, 70%, 50%)",
		udon: 74,
		udonColor: "hsl(81, 70%, 50%)"
	},
	{
		country: "AL",
		"hot dog": 22,
		"hot dogColor": "hsl(354, 70%, 50%)",
		burger: 76,
		burgerColor: "hsl(294, 70%, 50%)",
		sandwich: 71,
		sandwichColor: "hsl(18, 70%, 50%)",
		kebab: 37,
		kebabColor: "hsl(14, 70%, 50%)",
		fries: 90,
		friesColor: "hsl(8, 70%, 50%)",
		donut: 19,
		donutColor: "hsl(146, 70%, 50%)",
		junk: 15,
		junkColor: "hsl(65, 70%, 50%)",
		sushi: 19,
		sushiColor: "hsl(71, 70%, 50%)",
		ramen: 78,
		ramenColor: "hsl(357, 70%, 50%)",
		curry: 45,
		curryColor: "hsl(65, 70%, 50%)",
		udon: 50,
		udonColor: "hsl(79, 70%, 50%)"
	},
	{
		country: "AM",
		"hot dog": 40,
		"hot dogColor": "hsl(279, 70%, 50%)",
		burger: 62,
		burgerColor: "hsl(335, 70%, 50%)",
		sandwich: 54,
		sandwichColor: "hsl(266, 70%, 50%)",
		kebab: 74,
		kebabColor: "hsl(96, 70%, 50%)",
		fries: 8,
		friesColor: "hsl(204, 70%, 50%)",
		donut: 3,
		donutColor: "hsl(285, 70%, 50%)",
		junk: 43,
		junkColor: "hsl(182, 70%, 50%)",
		sushi: 10,
		sushiColor: "hsl(111, 70%, 50%)",
		ramen: 88,
		ramenColor: "hsl(269, 70%, 50%)",
		curry: 52,
		curryColor: "hsl(46, 70%, 50%)",
		udon: 69,
		udonColor: "hsl(247, 70%, 50%)"
	},
	{
		country: "AO",
		"hot dog": 1,
		"hot dogColor": "hsl(61, 70%, 50%)",
		burger: 45,
		burgerColor: "hsl(67, 70%, 50%)",
		sandwich: 37,
		sandwichColor: "hsl(82, 70%, 50%)",
		kebab: 47,
		kebabColor: "hsl(0, 70%, 50%)",
		fries: 85,
		friesColor: "hsl(245, 70%, 50%)",
		donut: 7,
		donutColor: "hsl(210, 70%, 50%)",
		junk: 94,
		junkColor: "hsl(273, 70%, 50%)",
		sushi: 9,
		sushiColor: "hsl(210, 70%, 50%)",
		ramen: 70,
		ramenColor: "hsl(181, 70%, 50%)",
		curry: 52,
		curryColor: "hsl(231, 70%, 50%)",
		udon: 0,
		udonColor: "hsl(354, 70%, 50%)"
	},
	{
		country: "AQ",
		"hot dog": 43,
		"hot dogColor": "hsl(110, 70%, 50%)",
		burger: 46,
		burgerColor: "hsl(158, 70%, 50%)",
		sandwich: 92,
		sandwichColor: "hsl(142, 70%, 50%)",
		kebab: 4,
		kebabColor: "hsl(62, 70%, 50%)",
		fries: 93,
		friesColor: "hsl(108, 70%, 50%)",
		donut: 53,
		donutColor: "hsl(291, 70%, 50%)",
		junk: 57,
		junkColor: "hsl(313, 70%, 50%)",
		sushi: 23,
		sushiColor: "hsl(236, 70%, 50%)",
		ramen: 77,
		ramenColor: "hsl(268, 70%, 50%)",
		curry: 98,
		curryColor: "hsl(307, 70%, 50%)",
		udon: 10,
		udonColor: "hsl(208, 70%, 50%)"
	}
];

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

const pieData = [
	{
		id: "scala",
		label: "scala",
		value: 513,
		color: `hsl(200, 70%, 50%)`
	},
	{
		id: "lisp",
		label: "lisp",
		value: 100,
		color: "hsl(297, 70%, 50%)"
	},
	{
		id: "erlang",
		label: "erlang",
		value: 464,
		color: "hsl(54, 70%, 50%)"
	},
	{
		id: "python",
		label: "python",
		value: 373,
		color: "hsl(264, 70%, 50%)"
	},
	{
		id: "javascript",
		label: "javascript",
		value: 455,
		color: "hsl(180, 70%, 50%)"
	}
];

function Plot(props) {
	useEffect(() => {
		console.log("rendered");
	});
	const {
		axis,
		margin,
		width,
		height,
		xScale,
		yScale,
		finalChoice,
		dataset
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

	const handleLineData = (inputX, inputY, data) => {};
	const handlePieData = (inputX, inputY, data) => {};
	const handleBarData = (inputX, inputY, data) => {};

	switch (finalChoice) {
		case "bar":
			return (
				<Bar
					data={barData}
					margin={margin}
					width={width}
					height={height}
					xScale={xScale}
					yScale={yScale}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Bar>
			);
		case "line":
			return (
				<Line
					data={lineData}
					margin={margin}
					width={width}
					height={height}
					xScale={xScale}
					yScale={yScale}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Line>
			);
		case "heatmap":
			let heatmapData = handleHeatmapData(axis.X, axis.Y, dataset);
			return (
				<Heatmap
					data={heatmapData}
					indexBy={axis.Y.name}
					keys={axis.X.count}
					margin={margin}
					width={width}
					height={height}
					axisRight={null}
					axisTop={null}
					enableLabels={true}
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
				></Heatmap>
			);
		case "pie":
			return (
				<Pie
					data={pieData}
					margin={margin}
					width={width}
					height={height}
					xScale={xScale}
					yScale={yScale}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Pie>
			);
		case "scatter":
			return (
				<Scatter
					data={handleScatterData(axis.X.name, axis.Y.name, dataset)}
					margin={margin}
					width={width}
					height={height}
					xScale={xScale}
					yScale={yScale}
					axisBottom={{ ...props.axisBottom, legend: `${axis.X.name}` }}
					axisLeft={{ ...props.axisLeft, legend: `${axis.Y.name}` }}
				></Scatter>
			);
		default:
			return null;
	}
}

export default Plot;
