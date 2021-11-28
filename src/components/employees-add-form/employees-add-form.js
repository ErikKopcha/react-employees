import { Component } from "react";
import './employees-add-form.scss';

class EmployeesAddForm  extends Component {
    render() {
        return (
            <div className="app-add-form">
                <h3>Add new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name" />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Salary in $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light">Add employee</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;