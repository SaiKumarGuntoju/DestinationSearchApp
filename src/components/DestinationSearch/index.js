import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialDestinationsList} = this.props
    const searchResults = initialDestinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="page-container">
        <div className="section-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search"
              onChange={this.onChangeSearchInput}
              className="search-input"
              value={searchInput}
            />
            <img
              alt="search icon"
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            />
          </div>
          <ul className="destination-list">
            {searchResults.map(eachOne => (
              <DestinationItem key={eachOne.id} list={eachOne} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
