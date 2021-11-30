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
      ]
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

  onToggleIncrease(id) {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }

        return item;
      })
    }));
  }

  onToggleRise(id) {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, rise: !item.rise}
        }

        return item;
      })
    }));
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList 
          onDelete={id => this.deleteUser(id)}
          data={this.state.data}
          onToggleIncrease={id => { this.onToggleIncrease(id) }}
          onToggleRise={id => { this.onToggleRise(id) }}
        />
        <EmployeesAddForm onSubmit={(data) => this.addUser(data)} />
      </div>
    );
  }
}

export default App;
