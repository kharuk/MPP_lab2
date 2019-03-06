import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateItem extends Component {
  state = {
    film_name: '',
    film_description: '',
    film_director:''
  }
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: this.state.film_name,
      description: this.state.film_description,
      director: this.state.film_director
    };
    axios.post('http://localhost:8080/films/new', obj)
        .then(res => console.log(res.data));

    this.setState({
      film_name: '',
      film_description: '',
      film_director:''
    })
  }

  onChangeName = (e) => {
    this.setState({
      film_name: e.target.value
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      film_description: e.target.value
    });
  }

  onChangeDirector = (e) => {
    this.setState({
      film_director: e.target.value
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
              value={this.state.film_name}
              maxLength="20" 
              required
              onChange={this.onChangeName}
            />
            <div className="valid-feedback">
                Looks good!
            </div>
          </div>
          <div className="form-group col-md-6">
            <label>Description</label>
            <textarea 
              rows='3' 
              type="text" 
              className="form-control" 
              name="description" 
              placeholder="description" 
              required
              onChange={this.onChangeDescription} 
              value={this.state.film_description}
            />
            <div className="invalid-feedback">
                Please write a description.
            </div>      
          </div>
          <div className="form-group col-md-6">
            <label>Director</label>
            <input 
              type="text" 
              className="form-control" 
              name="director" 
              placeholder="director" 
              maxLength="20" 
              value={this.state.film_director} 
              required
              onChange={this.onChangeDirector}
            />
            <div className="invalid-feedback">
                Please write a director.
            </div>   
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info"> Submit</button>
          <Link className="btn btn-secondary" to="/films">Back</Link>
        </div>
      </form>
    </section>
    );
  }
}
export default CreateItem;