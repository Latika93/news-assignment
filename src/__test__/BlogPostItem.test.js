// BlogPostItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; // for the additional matchers
import BlogPostItem from '../components/BlogPostItem.jsx';

const samplePost = {
    title: 'Sample News Title',
    description: 'This is a sample news description',
    publishedAt: '2024-07-17',
    urlToImage: 'test-image-url',
    url: 'test-url',
    content: 'This is the sample content of the news article',
};

test('renders BlogPostItem component with props', () => {
    render(
        <MemoryRouter>
            <BlogPostItem {...samplePost} />
        </MemoryRouter>
    );

    // Test if the title, description, and published date are displayed
    expect(screen.getByText('Sample News Title')).toBeInTheDocument();
    expect(screen.getByText('This is a sample news description')).toBeInTheDocument();
    expect(screen.getByText('Published At : 2024-07-17')).toBeInTheDocument();

    // Test if the image has the correct source
    const imgElement = screen.getByAltText('...');
    expect(imgElement).toHaveAttribute('src', 'test-image-url');

    // Test if the "Read..." link is present
    const readMoreLink = screen.getByText('Read...');
    expect(readMoreLink).toBeInTheDocument();

    // Test if the "Article website" link is present and has the correct URL
    const articleWebsiteLink = screen.getByText('Article website');
    expect(articleWebsiteLink).toBeInTheDocument();
});
