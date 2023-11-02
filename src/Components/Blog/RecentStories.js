import React from 'react';
import { Media } from 'reactstrap';

const RecentStories = () => {
    // Sample data for recent stories
    const stories = [
        {
            imageSrc: 'assets/images/blog/blog-thumb/01.jpg',
            title: 'Spring summer fashion trends',
            date: '20 April 2019'
        },
        {
            imageSrc: 'assets/images/blog/blog-thumb/02.jpg',
            title: '2020 styling trend',
            date: '15 April 2019'
        },
        {
            imageSrc: 'assets/images/blog/blog-thumb/03.jpg',
            title: 'Is branched For You Every',
            date: '5 April 2019'
        }
        // Add more story objects as needed
    ];

    return (
        <div className="widget border-bottom mb-8 pb-8">
            <h4 className="mb-5">Recent Stories</h4>
            {stories.map((story, index) => (
                <article key={index} className='mt-5'>
                    <Media className="align-items-center">
                        <img src={story.imageSrc} className="mr-3" alt="..." />
                        <Media body>
                            <h5 className="h6">
                                <a className="link-title" href="blog-single.html">{story.title}</a>
                            </h5>
                            <a className="d-inline-block text-muted small font-w-5" href="#">{story.date}</a>
                        </Media>
                    </Media>
                </article>
            ))}
        </div>
    );
};

export default RecentStories;
