import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.data = [
        { name: 'Alex C.', salary: 899, id: 0, increase: false },
        { name: 'Ben S.', salary: 1400, id: 1, increase: true },
        { name: 'Smith W.', salary: 5400, id: 2, increase: false },
    ];
  }

  render() {
    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel />
              <AppFilter />
          </div>
          
          <EmployeesList data={this.data} />
          <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
