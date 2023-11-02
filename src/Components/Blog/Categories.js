import React from 'react';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Categories = () => {
    // Sample data for categories
    const categories = [
        { name: 'All', count: 74 },
        { name: 'Arts and Entertainment', count: 23 },
        { name: 'Featured', count: 14 },
        { name: 'Daily news', count: 48 },
        { name: 'Blog Post', count: 32 }
    ];

    return (
        <div className="widget border-bottom mb-8 pb-8">
            <h4 className="mb-5">Categories</h4>
            <ul className='list-unstyled list-group-flush'>
                {categories.map((category, index) => (
                    <li key={index} className="mb-4">
                        <a className="list-group-item-action d-flex justify-content-between align-items-center" href="#">
                            {category.name}
                            <span color="primary-soft" className="badge badge-primary-soft text-dark font-weight-normal p-2 badge-pill ml-2">
                                {category.count}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
