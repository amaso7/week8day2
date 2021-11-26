import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react';

class App extends Component {
  state = {
    pts: [],
    pt: {
      'firstname': "john",
      'lastname': "doe",
      'dob': "1990-10-10",
      'create_time': "2021-11-19",
      'update_time': "2021-11-19",
      'provider': "Dr.jones",
      'prevappt': "2021-10-10",
      'nextappt': "2021-10-10",
      'meds': "zoloft",
      'num': "7777777777",
      'msg': "message test",
      'ID': 1
    }
  }
  componentDidMount() {
    this.getPts()
  }
  getPts = _ => {
    fetch('http://localhost:5000/api/pts')
    .then(response => response.json())
    .then(response => this.setState({ pts: response.data}))
    .catch(err => console.error(err))
    }
  addPt= _ =>{
    const { pt, pts } = this.state
    fetch(`http://localhost:5000/api/pts/add?ID=${pt.ID}firstname=${pt.firstname}&lastname=${pt.lastname}&dob=${pt.dob}&provider=${pt.provider}&prevappt=${pt.prevappt}&nextappt=${pt.nextappt}&meds=${pt.meds}&num=${pt.num}&msg=${pt.msg}`)
    .then(this.getPts)
    .catch(err => console.err(err))

  }
  
  
  renderPt = ({ID, firstname, lastname, dob, provider, prevappt, nextappt, meds, num, msg }) => <ul key = {ID}> {ID} {firstname}  {lastname}  {lastname}  {dob}  {provider}  {prevappt} {nextappt}  {meds}  {num}  {msg}</ul>

  render() {
    const { pts, pt } = this.state 
  return (
    <div className="App">
      {pts.map(this.renderPt)}
      <form>
      <input value= {pt.firstname} onChange={e => this.setState({ pt: {...pt, firstname: e.target.value }})}/>
      <input value= {pt.lastname} onChange={e => this.setState({ pt: {...pt, lastname: e.target.value }})}/>
      <input value= {pt.dob} onChange={e => this.setState({ pt: {...pt, dob: e.target.value }})}/>
      <input value= {pt.provider} onChange={e => this.setState({ pt: {...pt, provider: e.target.value }})}/>
      <input value= {pt.prevappt} onChange={e => this.setState({ pt: {...pt, prevappt: e.target.value }})}/>
      <input value= {pt.nextappt} onChange={e => this.setState({ pt: {...pt, nextappt: e.target.value }})}/>
      <input value= {pt.meds} onChange={e => this.setState({ pt: {...pt, meds: e.target.value }})}/>
      <input value= {pt.num} onChange={e => this.setState({ pt: {...pt, num: e.target.value }})}/>
      <input value= {pt.msg} onChange={e => this.setState({ pt: {...pt, msg: e.target.value }})}/>
      <button onClick= {this.addPt}>Send Message</button>
      </form>
      
    </div>
    
    );
  }
}

export default App;
