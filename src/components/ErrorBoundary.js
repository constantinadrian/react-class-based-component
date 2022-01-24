import { Component } from "react";

class ErrorBoundery extends Component {
    constructor() {
        super();
        this.state = { hasError: false};
    }
    
    // Error Boundaries
    componentDidCatch(error) {
        // console.log(error)
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <p>Something went wrong!</p>
            )
        }
        return this.props.children;
    };
};

export default ErrorBoundery;