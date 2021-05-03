  
import React from 'react';
import BlogPost from '../BlogPost/BlogPost';
import blog from '../../../images/blog.png';
import blog2 from '../../../images/blog2.png';
import blog3 from '../../../images/blog3.png';
import './Blog.css';


const blogData = [
    {
        title : 'Responsive Website',
        description : "One of the best things about having a mobile–friendly website is that you can reach a wider audience. Responsive websites make online sharing simple and so your web visitors are more likely to share on their social platforms. … Having a responsive website is a free way to rank better on search engines.       ",
        author:'Admin',
        img : blog,
        date : '23 April 2019'
    },
    {
        title : 'Content Writing',
        description :  "We provide content writing services as well. If you can’t figure out what to tell through your website so you could convert your visitors into clients then let us do the dirty job. Just tell us about your products/services & basic informations. We’ll organize & write well converting content for your website.",
        author:'Admin',
        img : blog2,
        date : '23 April 2019'
    },
    {
        title : 'Business Consulting',
        description :  "Want to start online business or something you love but still confused? No worries, we’ve industry expert professional consultants to help you get started. We’re good at technology based businesses. If you need professional consultancy about online business our tech experts definitely can help..        ",
        author:'Admin',
        img : blog3,
        date : '23 April 2019'
    },
]

const Blog = () => {
    return (
       <section className="blogs my-5">
           <div className="container">
               <div className="card-group mt-5">
                    {
                        blogData.map(blog => <BlogPost blog={blog} key={blog.title}/>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Blog;