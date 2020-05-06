import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: '',
        errorInfo: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo: info
        });
    }

    render() {
        if (this.state.hasError) {
            return (<div><h1>{this.state.errorMessage}</h1>
                <h6>{this.state.errorInfo}</h6></div>);
        }
        else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;