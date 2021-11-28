import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.scss';

const EmployeesList = ({ data }) => {
    // <EmployeesListItem name={item.name} salary={item.salary} key={item.id} />
    let users = data.map(item =>  <EmployeesListItem {...item} key={item.id} /> );

    return (
        <ul className="app-list list-group">
            {users}
        </ul>
    )
}

export default EmployeesList;