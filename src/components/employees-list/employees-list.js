import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.scss";

class EmployeesList extends Component {
  constructor(props) {
    super(props);

    this.onDelete = typeof this.props.onDelete === 'function' ? this.props.onDelete : null;
  }

  render() {
    const users = this.props.data.map(item => (
      <EmployeesListItem
        onDelete={() => this.onDelete(item.id)}
        {...item}
        key={item.id}
      />
    ));

    return <ul className="app-list list-group">{users}</ul>;
  }
}

export default EmployeesList;
