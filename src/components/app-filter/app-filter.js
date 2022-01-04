import { Component } from "react";
import "./app-filter.scss";

class AppFilter extends Component {
    constructor(props) {
        super(props);

        this.onUpdateFilter = props.onUpdateFilter || null;

        this.state = {
            filterType: 1
        };
    }

    onChangeFilterType(type = 1) {
        this.setState(
            { filterType: type },
            () => { this.onUpdateFilter && this.onUpdateFilter(this.state.filterType) }    
        );
    }

    render() {
        return (
            <div className="btn-group">
                <button 
                    onClick={() => { this.onChangeFilterType(1) }}
                    type="button"
                    className={`btn ${this.state.filterType === 1 ? 'btn-light' : 'btn-outline-light'}`}>
                    All employees
                </button>
                <button 
                    onClick={() => { this.onChangeFilterType(2) }}
                    type="button"
                    className={`btn ${this.state.filterType === 2 ? 'btn-light' : 'btn-outline-light'}`}>
                    Liked
                </button>
                <button 
                    onClick={() => { this.onChangeFilterType(3) }}
                    type="button"
                    className={`btn ${this.state.filterType === 3 ? 'btn-light' : 'btn-outline-light'}`}>
                    Salary more than 1000 $
                </button>
            </div>
        )
    }
}

export default AppFilter;