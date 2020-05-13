import React from 'react';

import Nav from './Nav';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import apiKey from '../config';

//Main retrives photo data and sends it via props to the Gallery Component

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      searchtext: undefined,
      searchquery: undefined,
    };
  }

  componentDidMount() {
    this.setState({ searchquery: this.props.query });
  }

  //search for photos if this.props.query is not the same as this.state.searchtext
  componentDidUpdate() {
    if (this.props.query !== this.state.searchtext) {
      this.performSearch(this.props.query);
      this.setState({ searchtext: this.props.query });
    }
  }

  //use flickr api to search for photos
  performSearch = (query) => {
    this.setState({ loading: true });
    this.setState({ searchquery: query });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`
    )
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({ photos: responseData.photos, loading: false });
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
      });
  };

  //render the app
  render() {
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <SearchForm />
            <Nav />
          </div>
        </div>
        <div className="main-content">
          {this.state.loading ? (
            <h1>Loading...</h1>
          ) : (
            <Gallery
              data={this.state.photos.photo}
              title={this.state.searchquery}
            />
          )}
        </div>
      </div>
    );
  }
}
