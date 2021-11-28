import { Component } from "react";
import "./app-filter.scss";

class AppFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        className="btn btn-light">
                        All employees
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        On the size
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        Salary more than 1000 $
                </button>
            </div>
        )
    }
}

export default AppFilter;