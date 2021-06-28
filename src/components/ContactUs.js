import React, { Component } from 'react';
import './Style.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center mb-5">Contact Us</h1>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="nom" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="nom" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="Prenom" className="form-label">Prenom</label>
                        <input type="text" className="form-control" id="Prenom" />
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactUs;