import { Component } from "react";
import './employees-add-form.scss';
import FormErrors from '../additional/form-errors';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
            formErrors: { 
                name: '', 
                salary: ''
            },
            nameValid: false,
            salaryValid: false,
            formValid: false
        };

        this.onSubmit = typeof this.props.onSubmit === 'function' ? this.props.onSubmit : null;
    }

    onValueChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        },
            () => { this.validateField(name, value); 
        });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let salaryValid = this.state.salaryValid;

        switch(fieldName) {
            case 'name':
                nameValid = value.length >= 3;
                fieldValidationErrors.name = nameValid ? '' : ' is invalid (min length 3)';
                break;
            case 'salary':
                salaryValid = value !== '' && +value !== 0;
                fieldValidationErrors.salary = salaryValid ? '' : ' must be a number and greater than zero';
                break;
            default:
                break;
        }
        
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            salaryValid: salaryValid
        }, 
            () => { this.validateForm() }
        );
    }

    validateForm() {
        this.setState({ formValid: this.state.nameValid && this.state.salaryValid});
    }

    formSubmit(e) {
        e.preventDefault();

        this.onSubmit({ name: this.state.name, salary: this.state.salary });
        
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    onSubmit={(e) => this.formSubmit(e)}
                    className="add-form d-flex">
                    <input 
                        value={name}
                        onChange={(e) => this.onValueChange(e)}
                        name="name"
                        type="text"
                        className={`form-control new-post-label`}
                        placeholder="Name" />
                    <input 
                        value={salary}
                        onChange={(e) => this.onValueChange(e)}
                        name="salary"
                        type="number"
                        className={`form-control new-post-label`}
                        placeholder="Salary in $?" />
    
                    <button 
                        disabled={!this.state.formValid}
                        type="submit"
                        className="btn btn-outline-light">
                        Add employee
                    </button>
                </form>

                <FormErrors formErrors={this.state.formErrors} />
            </div>
        )
    }
}

export default EmployeesAddForm;