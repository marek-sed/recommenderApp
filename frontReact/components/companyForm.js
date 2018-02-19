import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './formInput';

class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.alterInput = this.alterInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    let initState = {name: "", email: "", address: "", homepage: "", description: "", error: null};
    this.state = Object.assign({}, initState, this.props.company);
  }

  alterInput(evt) {
    this.setState({[evt.target.id]: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    if (true) {

    }
    this.props.submitCompany(this.state);
  }
  handleDelete(evt) {
    evt.preventDefault();
    this.props.deleteCompany();
  }

  render() {
    const { isNew, company, error } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        <h1>{isNew ? 'New company': company.name}</h1>
        {isNew && <FormInput type={'text'} id={'name'} value={this.state.name} label={'Company name'} onChange={this.alterInput} />}
        <FormInput type={'text'} id={'email'} value={this.state.email} label={'Email'} onChange={this.alterInput} />
        <FormInput type={'text'} id={'address'} value={this.state.address} label={'Address'} onChange={this.alterInput} />
        <FormInput type={'text'} id={'homepage'} value={this.state.homepage} label={'Homepage'} onChange={this.alterInput} />
        <FormInput type={'text'} id={'description'} value={this.state.description} label={'Description'} onChange={this.alterInput} />
        {
          isNew ?
          <div>
            <button type="submit" name="button">Create</button>
          </div>
          :
          <div>
            <button type="submit">Update</button>
            <button type="button" onClick={this.handleDelete}>Delete</button>
          </div>
        }
        {error && <span>{this.state.error ? this.state.error : error}</span>}
      </form>
    );
  }
}

CompanyForm.propTypes = {
  company: PropTypes.object,
  submitCompany: PropTypes.func.isRequired,
  deleteCompany: PropTypes.func,
  isNew: PropTypes.bool,
  error: PropTypes.string
};

export default CompanyForm;
