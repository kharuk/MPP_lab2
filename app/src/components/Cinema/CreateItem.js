import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateItem extends Component {
  state = {
    cinema_name: '',
    cinema_phone: '',
    cinema_address:''
  }
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.cinema_name,
      phone: this.state.cinema_phone,
      address: this.state.cinema_address
    };
    axios.post('http://localhost:8080/cinemas/new', obj)
        .then(res => console.log(res.data));

    this.setState({
      cinema_name: '',
      cinema_phone: '',
      cinema_address:''
    })
  }

  onChangeName = (e) => {
    this.setState({
      cinema_name: e.target.value
    });
  }

  onChangePhone = (e) => {
    this.setState({
      cinema_phone: e.target.value
    });
  }

  onChangeAddress = (e) => {
    this.setState({
      cinema_address: e.target.value
    });
  }

  render() {
    return (
      <section className="container container__margin" >
        <h3>{this.props.header}</h3>
        <form onSubmit={this.onSubmit} autoComplete="off" className="needs-validation" noValidate>
          <div>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="name" 
                placeholder="name" 
                maxLength="30" 
                value={this.state.cinema_name} 
                onChange={this.onChangeName}
                required
              />
              <div className="valid-feedback">
                Looks good!
              </div>
          </div>
          <div className="form-group col-md-6">
            <label>Phone</label>
            <input 
                type="tel" 
                pattern="^\d{7}$" 
                className="form-control" 
                name="phone" 
                placeholder="phone" 
                value={this.state.cinema_phone}
                onChange={this.onChangePhone} 
                required
            />
            <div className="invalid-feedback">  
                Please enter 7 digit mobile number.  
            </div>   
        </div>
        <div className="form-group col-md-6">
            <label>Address</label>
            <input 
                type="text" 
                className="form-control" 
                name="address" 
                placeholder="address" 
                maxLength="60" 
                value={this.state.cinema_address}
                onChange={this.onChangeAddress}
                required
            />
            <div className="invalid-feedback">
              Please write an address.
            </div>  
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info"> Submit</button>
          <Link className="btn btn-secondary" to="/cinemas">Back</Link>
        </div>
      </form>
    </section>
    );
  }
}
export default CreateItem;