import React from 'react';

import Nav from './Nav';
import SearchForm from './SearchForm';
import ImgList from './ImgList';
import apiKey from '../config'

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
      loading: true,
      searchtext: undefined,
      searchquery: undefined
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  componentDidUpdate() {
    if (this.props.query !== this.state.searchtext) {
      this.performSearch(this.props.query);
      this.setState({ searchtext: this.props.query });
     }
  }

  performSearch = (query = 'sunsets') => {
    this.setState({ loading: true });
    this.setState({ searchquery: query });
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ imgs: responseData.photos, loading: false });
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
            <SearchForm onSearch={this.performSearch} /> 
            <Nav />
            <h1>{this.state.searchquery}</h1>      
          </div>   
        </div>    
        <div className="main-content">
        {
            (this.state.loading)
             ? <h1>Loading...</h1>
             : <ImgList data={this.state.imgs.photo} />
          }    
        </div>
      </div>
    );
  }
}
