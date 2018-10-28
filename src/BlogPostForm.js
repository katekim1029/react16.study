import React from 'react';
import withForm from './withForm';

const BlogPostForm = ({ form, onChange, onSubmit }) => {
    const { title, content, tags } = form;
    return (
        <form className="BlogPostForm" onSubmit={onSubmit}>
            <input 
                onChange={onChange}
                value={title}
                name="title"
                placeholder="제목"
            />
            <textarea 
                onChange={onChange}
                value={content}
                name="content"
                placeholder="내용"
            />
            <input 
                onChange={onChange}
                value={tags}
                name="tags"
                placeholder="태그"
            />
            <button>작성</button>
        </form>
    );
};

export default withForm({
    title: '',
    content: '',
    tags: ''
})(BlogPostForm);

// Without HOC
// import React, { Component } from 'react';

// class BlogPostForm extends Component {
//     state = {
//         title: '',
//         content: '',
//         tags: ''
//     }

//     handleChange = e => {
//         const { name, value } = e.target;
//         this.setState({
//             [name] : value
//         });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//     };

//     render() {
//         const { title, content, tags } = this.state;
//         return (
//             <form className="BlogPostForm" onSubmit={this.handleSubmit}>
//                 <input 
//                     onChange={this.handleChange}
//                     value={title}
//                     name="title"
//                     placeholder="제목"
//                 />
//                 <textarea 
//                     onChange={this.handleChange}
//                     value={content}
//                     name="content"
//                     placeholder="내용"
//                 />
//                 <input 
//                     onChange={this.handleChange}
//                     value={tags}
//                     name="tags"
//                     placeholder="태그"
//                 />
//                 <button>작성</button>
//             </form>
//         );
//     }
// }

// export default BlogPostForm;
