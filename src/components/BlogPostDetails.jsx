import React from 'react';
import image from '../assets/alternate.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogPostDetails = () => {
    const location = useLocation();
    const { title, description, publishedAt, urlToImage, url, content } = location.state;
    console.log("location.state : ", location.state);

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <img src={urlToImage ? urlToImage : image} className="card-img-top" alt="news" />
                        <div className="card-body">
                            <h1 className="card-title">{title}</h1>
                            <p className="text-muted">Published At: {publishedAt}</p>
                            <p className="card-text">{description}</p>
                            <p className="card-text">{content}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Link to="/" className="btn btn-primary mt-3">Back</Link>
                                <a href={url} className="btn btn-primary">Article website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPostDetails;
