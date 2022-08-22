
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import data from "./components/data.json"
import SelectedBeast from './components/selectedBeast';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataBeast: data,
      selectedBeast: {},
      showModal: false
    }
  }
  passModal = (beast) => {
    this.setState({
      showModal: true,
      selectedBeast: beast
    })
  }
  handleClose = () => {
    this.setState({
      showModal: false
    })
  }
  filterBeast = (e) => {
    const hornNumber = parseInt(e.target.value);
    let filterData = data;
    if (hornNumber) {
      filterData = data.filter(item => item.horns === hornNumber)
    }
    this.setState({
      dataBeast: filterData
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Main dataBeast={this.state.dataBeast} passModal={this.passModal} filterBeast={this.filterBeast} />
        <SelectedBeast show={this.state.showModal} handleClose={this.handleClose} selectedBeast={this.state.selectedBeast} />

        <Footer />
      </div>
    );
  }

}

export default App;
