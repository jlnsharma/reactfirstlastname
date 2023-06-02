import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    const {firstName} = this.state
    if (firstName === false) {
      this.setState(prevState => ({firstName: true}))
    } else {
      this.setState(prevState => ({firstName: false}))
    }
  }

  showLastName = () => {
    const {lastName} = this.state
    if (lastName === false) {
      this.setState(prevState => ({lastName: true}))
    } else {
      this.setState(prevState => ({lastName: false}))
    }
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="main">
        <h1 className="heading">Show/Hide</h1>
        <div className="butCont">
          <div className="nameCont">
            <button onClick={this.showFirstName} className="btn" type="button">
              Show/Hide Firstname
            </button>
            {firstName ? <p className="boxFirst">Joe</p> : null}
          </div>
          <div className="nameCont">
            <button onClick={this.showLastName} className="btn" type="button">
              Show/Hide Lastname
            </button>
            {lastName ? <p className="boxFirst">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
