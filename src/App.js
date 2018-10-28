import React, { Component } from 'react';
import Layout from './Layout';
import BlogPostForm from './BlogPostForm';
import LoginForm from './LoginForm';
import Output from './Output';

class App extends Component {
    state = {
        login: null,
        blogPost: null
    }

    handleSubmitLogin = login => {
        this.setState({
            login
        });
    };

    handleSubmitBlogPost = blogPost => {
        this.setState({
            blogPost
        });
    };

    render() {
        const { blogPost, login } = this.state;
        return (
            <Layout 
                login = {<LoginForm onSubmit={this.handleSubmitLogin} />}
                blogPost = {<BlogPostForm onSubmit={this.handleSubmitBlogPost} />}
                output = {<Output blogPost={blogPost} login={login} />}
            />
        );
    }
}

export default App;
