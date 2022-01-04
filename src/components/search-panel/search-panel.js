import { Component } from "react";
import './search-panel.scss';

class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.onUpdateTerm = props.onUpdateTerm || null;
        
        this.state = {
            value: ''
        };
    }

    onUpdateValue(e) {
        const term = e.target.value;

        this.setState(
            { value: term },
            () => { this.onUpdateTerm && this.onUpdateTerm(this.state.value); }
        );
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="search employee"
                value={this.state.value}
                onChange={(e) => { this.onUpdateValue(e) }}
            />
        )
    }
}

export default SearchPanel;