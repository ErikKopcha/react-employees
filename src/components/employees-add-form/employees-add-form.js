import { Component } from "react";
import './employees-add-form.scss';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        };
    }

    onValueChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { name, salary } = this.state;

        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input 
                        value={name}
                        onChange={(e) => this.onValueChange(e)}
                        name="name"
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Name" />
                    <input 
                        value={salary}
                        onChange={(e) => this.onValueChange(e)}
                        name="salary"
                        type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?" />
    
                    <button 
                        type="submit"
                        className="btn btn-outline-light">
                        Add employee
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;