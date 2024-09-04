// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Blogs.css'
import { firestore } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const blogCollection = collection(firestore, 'blogs');
            const blogSnapshot = await getDocs(blogCollection);
            const blogList = blogSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }));
            return blogList;
        }
        catch (err) {
            console.error(err)
        }
    };

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const blogList = await fetchBlogs();
                setBlogs(blogList);
            }
            catch (err) {
                console.error(err);
            }
        };

        getBlogs();
    }, []);

    return (
        <div>
            <h2>Blog Section</h2>
            {blogs.map(blog => (
                <div key={blog.id} className="blog-post">
                    <h3>{blog.title}</h3>
                    <img src={blog.imageUrl} alt={blog.title} />
                    <p>{blog.content}</p>
                    <span>{blog.createdAt 
                    ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })
                    : 'Date not available'}</span>
                </div>
            ))}
        </div>
    );
};

export default BlogSection;
