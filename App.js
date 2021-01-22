import React, { useEffect, useState } from "react";
import "./App.css";
import Newss from "./News";
import { Select } from "antd";

const { Option } = Select;

function App() {
	var url2 =
		"https://newsapi.org/v2/sources?language=en&country=us&apiKey=ff0ecd445f224fe19d89c7ca68b7c126";

	const [News, setNews] = useState([]);
	const [channel, setChannel] = useState([]);
	const url1 =
		"http://newsapi.org/v2/top-headlines?" +
		"country=us&" +
		"apiKey=ff0ecd445f224fe19d89c7ca68b7c126";

	function handleChange(value) {
		console.log(`selected ${value}`);
		getNews(
			"http://newsapi.org/v2/top-headlines?" +
				`sources=${value}&` +
				"apiKey=ff0ecd445f224fe19d89c7ca68b7c126"
		);
	}

	const getNews = async (url) => {
		var req = new Request(url);
		var response = await fetch(req);
		var data1 = await response.json();
		setNews(data1.articles);
	};

	const getCh = async () => {
		var req = new Request(url2);
		var response = await fetch(req);
		var data = await response.json();
		setChannel(data.sources);
	};

	useEffect(() => {
		getCh();
		getNews(url1);
	}, []);

	return (
		<div className="App">
			<div className="navbar">
				<h2 className="title">News.s</h2>

				<Select
					className="ant-dropdown-link"
					defaultValue="Sources"
					style={{ width: 120 }}
					onChange={handleChange}
				>
					{channel.map((cha) => (
						<Option key={cha.id} value={cha.id}>
							{cha.name}
						</Option>
					))}
				</Select>
			</div>

			<div className="content">
				{News.map((news) => (
					<Newss
						title={news.content}
						image={news.urlToImage}
						link={news.url}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
