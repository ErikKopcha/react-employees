import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

class EmployeesList extends Component {
  render() {
    const { onDelete, onToggleRise, onToggleIncrease, data } = this.props;

    const users = data.map(item => (
      <EmployeesListItem
        onDelete={() => onDelete(item.id)}
        onToggleRise={() => onToggleRise(item.id)}
        onToggleIncrease={() => onToggleIncrease(item.id)}
        {...item}
        key={item.id}
      />
    ));

    return <ul className="app-list list-group">{users}</ul>;
  }
}

export default EmployeesList;
