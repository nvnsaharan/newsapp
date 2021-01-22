import React from "react";
import { Menu, Dropdown } from "antd";
import ReactDOM from "react-dom";
import "./App.css";

function Channel({ name }) {
	return ReactDOM.render(
		<Menu className="menu">
			<Menu.Item danger>{name}</Menu.Item>
		</Menu>
	);
}

export default Channel;
