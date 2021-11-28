import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.scss';

class EmployeesList extends Component {
    constructor(props) {
        super(props);

        // <EmployeesListItem name={item.name} salary={item.salary} key={item.id} />
        this.users = this.props.data.map(item =>  <EmployeesListItem {...item} key={item.id} /> );
    }
    
    render() {
        return (
            <ul className="app-list list-group">
                {this.users}
            </ul>
        )
    }
}

export default EmployeesList;