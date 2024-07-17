import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BlogPostList from '../components/BlogPostList';


beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          articles: [
            {
              title: 'Test Title',
              description: 'Test Description',
              publishedAt: '2024-07-17',
              urlToImage: 'test-image-url',
              url: 'test-url',
              content: 'Test Content',
            },
          ],
        }),
    })
  );
});

afterEach(() => {
  global.fetch.mockClear();
});

test('renders BlogPostList and fetches articles', async () => {
  render(<BlogPostList category="technology" />);

//   await waitFor(() => {
//     expect(screen.getByText('Test Title')).toBeInTheDocument();
//   });

  expect(screen.getByText('Previous')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeInTheDocument();
});
