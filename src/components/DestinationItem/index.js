import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {list} = this.props
    const {name, imgUrl} = list
    return (
      <li className="listContainer">
        <img className="image" src={imgUrl} alt={name} />
        <h1 className="heading1">{name}</h1>
      </li>
    )
  }
}

export default DestinationItem
