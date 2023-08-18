/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Posts from './components/Posts'

// Unit test/Behavior Test
describe("rendering", () => {
    test("renders the App component", () => {
        render(<Posts />)
        expect(screen.getByText("ALL POSTS")).toBeInTheDocument()     })
    // Test: renders the Button component with correct props

})