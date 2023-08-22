/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Posts from './components/Posts'
import PostName from './components/PostName';
import CreatePost from './components/CreatePost';
import Register from './components/Register';

// Unit test/Behavior Test
describe("rendering", () => {
    test("renders the register component", () => {
        render(<Register />)
        expect(screen.getByText("Sign up")).toBeInTheDocument()     })
    // Test: renders the Button component with correct props

})