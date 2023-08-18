import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App";

// Unit test/Behavior Test
describe("rendering", () => {
    test("renders the App component", () => {
        render(<App />)
        expect(screen.getByText("HELLO")).toBeInTheDocument()     })
    // Test: renders the Button component with correct props

})