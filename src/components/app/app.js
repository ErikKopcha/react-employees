import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import nextId from "react-id-generator";
import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Alex C.", salary: 899, id: 0, increase: false, rise: false },
        { name: "Ben S.", salary: 1400, id: 1, increase: true, rise: true },
        { name: "Smith W.", salary: 5400, id: 2, increase: false, rise: false }
      ],
      term: '',
      filterType: 1
    }
  }

  addUser({ name, salary }) {
    const id = nextId();
    const newEmployee = {
      name,
      salary,
      id,
      increase: false,
      rise: false
    };

    this.setState(({ data }) => {
      const newData = [...data, newEmployee];
      return { data: newData }
    })
  }

  deleteUser(id) {
    this.setState(({ data }) => {
        return { data: data.filter(item => item.id !== id) }
    })
  }

  onToggleProp(id, prop) {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }

        return item;
      })
    }));
  }

  searchEmp(items, term) {
    if (term.length === 0) {
      return items; 
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
    });
  }

  getFilteredItems(items, type) {
    let filtered = [];

    switch (type) {
      case 1:
        filtered = items;
        break;
      case 2:
        filtered = items.filter(item => item.rise);
        break;
      case 3: 
        filtered = items.filter(item => item.salary > 1000);
        break;
      default:
        filtered = items;
        break;
    }

    return filtered;
  }

  onUpdateSearch(term = '') {
    this.setState({ term });
  }

  onUpdateFilter(type = 1) {
    this.setState({ filterType: type });
  }

  render() {
    const { data, term, filterType } = this.state;
    const employeesCount = this.state.data.length;
    const increaseCount = this.state.data.filter(el => el.rise).length;
    const visibleData = this.getFilteredItems(this.searchEmp(data, term), filterType); ;

    return (
      <div className="app">
        <AppInfo 
          increaseCount={increaseCount}
          employeesCount={employeesCount} />

        <div className="search-panel">
          <SearchPanel onUpdateTerm={(term) => { this.onUpdateSearch(term) }} />
          <AppFilter onUpdateFilter={(type) => { this.onUpdateFilter(type); } } />
        </div>

        <EmployeesList 
          onToggleProp={(id, prop) => { this.onToggleProp(id, prop) }}
          onDelete={(id) => this.deleteUser(id)}
          data={visibleData}
        />
        <EmployeesAddForm onSubmit={(data) => this.addUser(data)} />
      </div>
    );
  }
}

export default App;
