/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from './components/Register';

// Unit test/Behavior Test
describe("rendering", () => {
    test("renders the register component", () => {
        render(<Register />)
        expect(screen.getByText("Sign up")).toBeInTheDocument()     })
})