import React, { Component } from "react";
import "./App.css";
import { Com } from "@components/app";

class App extends Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}
	render(): React.ReactNode {
		const handleItemChange = (e: any) => {
			console.log(e);
		};
		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					></a>
					<Com></Com>
				</header>
			</div>
		);
	}
}

export default App;
