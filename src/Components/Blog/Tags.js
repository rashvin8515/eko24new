import React from 'react';
import { Button } from 'reactstrap';

const Tags = () => {
    // Sample data for tags
    const tags = ['Bootsland', 'Web Design', 'Saas', 'Corporate', 'Sass', 'Software', 'Landing', 'Startup'];

    return (
        <div className="widget border-bottom mb-8 pb-8">
            <h4 className="mb-5">Tags</h4>
            <div>
                {tags.map((tag, index) => (
                    <a key={index} className="btn link-title btn-sm bg-light m-1" href="#">
                        {tag}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Tags;
