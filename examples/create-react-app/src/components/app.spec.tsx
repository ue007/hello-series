import React from "react";
import { render } from "react-dom";
import { Com } from "./app";

describe("App", () => {
	it("should render without crashing", () => {
		const div = document.createElement("div");
		render(<Com />, div);
	});
});
