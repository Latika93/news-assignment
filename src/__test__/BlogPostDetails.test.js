import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import BlogPostDetails from '../components/BlogPostDetails';

test('renders NewsPage component with provided state', () => {
    const state = {
        title: 'Test Title',
        description: 'Test Description',
        publishedAt: '2024-07-17',
        urlToImage: 'test-image-url',
        content: 'Test Content',
    };

    render(<MemoryRouter initialEntries={[{ pathname: '/news-detail', state }]}>
        <Routes>
            <Route path="/news-detail" element={<BlogPostDetails />} />
        </Routes>
    </MemoryRouter>)

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Published At: 2024-07-17')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
    expect(screen.getByAltText('news')).toHaveAttribute('src', 'test-image-url');
});
