import React from 'react';

const BlogPost = (props) => {
    console.log(props)
    const {title, description, author, img , date} = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img Style={{height:'200px'}} className="mx-3" src={img} alt="" Style={{height:'200px'}} />
                
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            <div className="card-footer">
                <h6 className="text-primary">{author}</h6>
                <p className="m-0">{date}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;