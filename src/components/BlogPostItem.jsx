import React from 'react'
import image from '../assets/alternate.png'
import { Link } from 'react-router-dom';

const BlogPostItem = ({ title, description, publishedAt, urlToImage, url, content }) => {
    const img = '';
    return (
        <div className="card d-inline-block m-3 p-2" style={{ maxWidth: '340px' }}>
            <img src={urlToImage ? urlToImage : image} style={{ height: '200px', }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.slice(0, 30)}</h5>
                <p className="card-text">
                    {description ? description.slice(0, 70) : "Description"}
                </p>
                <p>Published At : {publishedAt} </p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* <a href="#" className="btn btn-primary"> */}
                    <Link
                        to="/news-detail"
                        state={{ title, description, publishedAt, urlToImage, url, content }}
                        className="btn btn-primary"
                    >
                        Read...
                    </Link>
                    {/* </a> */}
                    <a href={url} className="btn btn-primary">Article website</a>
                </div>
            </div>
        </div>
    )
}

export default BlogPostItem