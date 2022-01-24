// import { Fragment, useState, useEffect } from "react";
import { Fragment } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Component } from "react/cjs/react.production.min";
import UsersContext from "../store/users-context";
import ErrorBoundery from "./ErrorBoundary";


class UserFinder extends Component {
    static contextType = UsersContext

    constructor() {
        super();
        this.state = {
            // filteredUsers: DUMMY_USERS,
            filteredUsers: [], // e.g.: for componentDidMount()
            searchTerm: "",
        };
    }

    // This run when the component is rendered 
    // for the first time
    componentDidMount() {
        // Send http request
        this.setState({
            filteredUsers: this.context.users
        });
    }

    // the component did update receives
    // two arguments which help us.
    // The previous props and the previous state.
    // the last props and state snapshot
    // before the current component update.
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <Fragment>
                <div className={classes.finder}>
                    <input type="search" onChange={this.searchChangeHandler.bind(this)} />
                </div>
                <ErrorBoundery>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundery>
            </Fragment>
        );
    }
}

export default UserFinder;
