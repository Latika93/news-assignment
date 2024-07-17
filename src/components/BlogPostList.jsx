import React, { useEffect, useState } from 'react';
import BlogPostItem from './BlogPostItem';
import { API_KEY } from '../constants';

const BlogPostList = ({ category }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    const fetchArticles = () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}&page=${currentPage}&pageSize=${articlesPerPage}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.articles))
            .catch((error) => console.error('Error fetching data:', error));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    useEffect(() => {
        fetchArticles();
    }, [category, currentPage]);
    return (
        <div className="container">
            <h1 className="text-center m-2 bg-primary py-2 text-white">Top News</h1>
            {data.length > 0 ? (
                data.map((news, index) => (
                    <BlogPostItem
                        key={index}
                        title={news.title}
                        description={news.description}
                        publishedAt={news.publishedAt}
                        urlToImage={news.urlToImage}
                        url={news.url}
                        content={news.content}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
            <div className="pagination-controls mt-4 text-center">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="btn btn-secondary m-2"
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    className="btn btn-secondary m-2"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BlogPostList;
