import React from "react";
import "./App.css";

const Newss = ({ title, image, link }) => {
	return (
		<div className="new-panel" key={title}>
			<p className="new-report">{title}</p>
			<img className="new-image" src={image} alt="" />
			<a href={link} className="new-link">
				<div className="new-button">More</div>
			</a>
		</div>
	);
};

export default Newss;
