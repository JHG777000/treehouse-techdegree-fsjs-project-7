import React from 'react';

import Nav from './Nav';
import SearchForm from './SearchForm';
import ImgList from './ImgList';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true,
      searchtext: undefined
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  componentDidUpdate() {
    if (this.props.match.params.nav !== this.state.searchtext) {
      this.performSearch(this.props.match.params.nav);
      this.setState({ searchtext: this.props.match.params.nav });
     }
  }

  performSearch = (query = 'gif') => {
    this.setState({ loading: true });
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ imgs: responseData.data, loading: false });
    })
    .catch((error) => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">ImgSearch</h1>
            <SearchForm onSearch={this.performSearch} />   
            <Nav />    
          </div>   
        </div>    
        <div className="main-content">
        {
            (this.state.loading)
             ? <h1>Loading...</h1>
             : <ImgList data={this.state.imgs} />
          }    
        </div>
      </div>
    );
  }
}
