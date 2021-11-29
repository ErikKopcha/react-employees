import { Component } from 'react';
import './employees-list-item.scss';

class EmployeesListItem extends Component {

    render() {
        const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = this.props;

        return (
            <li 
                className={`list-group-item d-flex justify-content-between 
                    ${increase ? 'increase' : ''}
                    ${rise ? 'like' : ''}
                `}>

                <span className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={() => onToggleRise()}
                        className="btn-like btn-sm ">
                        <i className="fas fa-heart"></i>
                    </button>

                    <button type="button"
                        onClick={() => onToggleIncrease()}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button 
                        onClick={() => onDelete()}
                        type="button"
                        className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;