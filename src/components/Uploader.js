import { Button, Spinner, Row, Col } from "react-bootstrap";
import React from "react";
import axios from "axios";
import FormData from "form-data";
import Files from "../utils/index";
import "../utils/uploader.css";
import Datatable from "./Datatable";

class Uploader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			files: [],
			isLoading: false,
			data: null
		};
	}

	onFilesChange = (files) => {
		this.setState({
			files
		});
	};

	onFilesError = (error, file) => {
		console.log("error code " + error.code + ": " + error.message);
	};

	filesRemoveOne = (file) => {
		this.refs.files.removeFile(file);
	};

	filesUpload = () => {
		const formData = new FormData();
		Object.keys(this.state.files).forEach((key) => {
			const file = this.state.files[key];
			formData.append(
				key,
				new Blob([file], { type: file.type }),
				file.name || "file"
			);
		});

		this.setState({ isLoading: true });
		axios
			.post(`/api/upload`, formData)
			.then((res) => {
				const value = {
					name: this.state.files[0].name,
					rowData: res.data.rowData,
					jsonData: res.data.jsonData
				};
				this.setState({ data: value.rowData });
				this.props.passVal(value);
			})
			.then((res) => {
				this.setState({ isLoading: false });
			})
			.catch((err) => window.alert("Error uploading files :("));
	};

	render() {
		return (
			<div
				style={{
					marginTop: "30px",
					display: "flex",
					justifyContent: "space-around"
				}}
			>
				<div
					style={{
						marginTop: "30px",
						marginBottom: "10px",
						display: "flex",
						flexDirection: "column",
						alignItems: "center"
					}}
				>
					<Files
						ref="files"
						className="files-dropzone-list"
						style={{
							height: "100px",
							cursor: this.state.files.length > 0 ? "not-allowed" : "pointer"
						}}
						onChange={this.onFilesChange}
						onError={this.onFilesError}
						accepts={[".csv"]}
						maxFiles={1}
						maxFileSize={10000000}
						minFileSize={0}
						clickable={this.state.files.length > 0 ? false : true}
					>
						Drop files here or click to upload
					</Files>
					{this.state.files.length === 0 ? null : (
						<Button
							variant="success"
							onClick={this.filesUpload}
							style={{ width: "150px", marginTop: "20px" }}
						>
							{this.state.isLoading ? (
								<div>
									<Spinner
										as="span"
										animation="grow"
										size="sm"
										role="status"
										aria-hidden="true"
									/>
									Loading...
								</div>
							) : (
								<span>Upload</span>
							)}
						</Button>
					)}

					{this.state.files.length > 0 ? (
						<div className="files-list">
							<ul>
								{this.state.files.map((file) => (
									<li className="files-list-item" key={file.id}>
										<div className="files-list-item-preview">
											{file.preview.type === "image" ? (
												<img
													className="files-list-item-preview-image"
													src={file.preview.url}
													alt={file.id}
												/>
											) : (
												<div className="files-list-item-preview-extension">
													{file.extension}
												</div>
											)}
										</div>
										<div className="files-list-item-content">
											<div className="files-list-item-content-item files-list-item-content-item-1">
												{file.name}
											</div>
											<div className="files-list-item-content-item files-list-item-content-item-2">
												{file.sizeReadable}
											</div>
										</div>
										<div
											id={file.id}
											className="files-list-item-remove"
											onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
										/>
									</li>
								))}
							</ul>
						</div>
					) : null}
				</div>
				<div
					style={{
						marginTop: "30px",
						marginBottom: "10px",
						display: "flex",
						flexDirection: "column"
					}}
				>
					{this.state.data ? (
						<Datatable
							width="600px"
							header={this.state.data[0]}
							body={this.state.data.slice(1)}
						></Datatable>
					) : null}
				</div>
			</div>
		);
	}
}

export default Uploader;
