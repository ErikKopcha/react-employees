import { Component } from "react";
import "./app-info.scss";

class AppInfo extends Component {
    render() {
        const { employeesCount, increaseCount } = this.props;

        return (
            <div className="app-info">
                <h1>Accounting for employees in company N</h1>
                <h2>Total number of employees: {employeesCount}</h2>
                <h2>The prize will be awarded to: {increaseCount}</h2>
            </div>
        )
    }
}

export default AppInfo;