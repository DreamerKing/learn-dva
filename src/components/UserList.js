import React, { Component } from 'react';

export default class UserList extends Component {

    render() {
        const { list } = this.props;
        return (
            <ul>
                {
                    list.map(user => {
                        return <li key={user.id}>{`Name: ${user.name} Age:${user.age}`}</li>
                    })
                }
            </ul>
        )
    }
}