import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="text-center container">
                <h2>Welcome { this.props.name }</h2>
            </div>
        );
    }
}

export default Profile;
