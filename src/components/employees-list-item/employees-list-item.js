import { Component } from 'react';
import './employees-list-item.scss';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);

        this.name = this.props.name;
        this.salary = this.props.salary;
        this.increase = this.props.increase;
    }

    render() {
        return (
            <li className={`list-group-item d-flex justify-content-between ${this.increase ? 'increase' : ''}`}>
                <span className="list-group-item-label">{this.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;