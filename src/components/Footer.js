import React, { Component } from 'react';
import './Style.css';

class Footer extends Component {
    render() {
        return (
            <footer className="container mt-5 mb-5">
                <p className="float-end"><a href="#">Back to top</a></p>
                <p>© 2017–2021 Company, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
            </footer>

        );
    }
}

export default Footer;