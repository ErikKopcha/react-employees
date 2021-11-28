import { Component } from 'react';
import './employees-list-item.scss';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);

        this.name = this.props.name;
        this.salary = this.props.salary;

        this.state = {
            increase: this.props.increase,
            isLike: this.props.isLike,
        };
    }

    onIncrease(event) {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    }

    setLike(event) {
        this.setState(({isLike}) => ({
            isLike: !isLike
        }));
    }

    render() {
        this.increase = this.state.increase;
        this.isLike = this.state.isLike;

        return (
            <li 
                className={`list-group-item d-flex justify-content-between 
                    ${this.increase ? 'increase' : ''}
                    ${this.isLike ? 'like' : ''}
                `}>

                <span className="list-group-item-label">{this.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={this.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={(e) => this.setLike(e)}
                        className="btn-like btn-sm ">
                        <i className="fas fa-heart"></i>
                    </button>

                    <button type="button"
                        onClick={(e) => this.onIncrease(e)}
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