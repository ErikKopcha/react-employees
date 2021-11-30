import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

class EmployeesList extends Component {
  render() {
    const { onDelete, onToggleProp, data } = this.props;

    const users = data.map(item => (
      <EmployeesListItem
        onDelete={() => onDelete(item.id)}
        onToggleRise={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}
        onToggleIncrease={(event) => onToggleProp(item.id, event.currentTarget.getAttribute('data-toggle'))}
        {...item}
        key={item.id}
      />
    ));

    return <ul className="app-list list-group">{users}</ul>;
  }
}

export default EmployeesList;
