import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import EventEmitter from "eventemitter3";

type Props = {};
type State = {
	events: any[];
};

class App extends Component<Props, State> {
	emitter: EventEmitter;
	constructor(props: Props) {
		super(props);
		this.state = {
			events: [],
		};

		this.emitter = new EventEmitter();

		this.emitter.on("add", (data: any) => {
			this.setState({
				events: [data, ...this.state.events],
			});
		});

		this.emitter.on("remove", (data) => {
			this.state.events.pop();
			this.setState({
				events: [...this.state.events],
			});
		});

		this.emitter.on("clear", (data) => {
			this.setState({
				events: [],
			});
		});
	}

	handleAdd = () => {
		this.emitter.emit("add", { message: "add!" });
	};

	handleRemove = () => {
		this.emitter.emit("remove", { message: "remove!" });
	};

	handleClear = () => {
		this.emitter.emit("clear", { message: "clear!" });
	};

	render(): React.ReactNode {
		return (
			<div className="App">
				<header className="App-header">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React Event Emitter
					</a>
					<img src={logo} className="App-logo" alt="logo" />
					<div>
						<button onClick={this.handleAdd}>Add</button>
						<button onClick={this.handleRemove}>Remove</button>
						<button onClick={this.handleClear}>Clear</button>
						<br />
						<ol>
							{this.state.events.map((e: any, index: number) => (
								<li key={e.message + index}>
									{" "}
									{e.message + index}{" "}
								</li>
							))}
						</ol>
					</div>
				</header>
			</div>
		);
	}
}

export default App;
