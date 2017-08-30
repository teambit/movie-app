import React, { Component } from 'react';
import Item from '../item';
import PropTypes from 'prop-types';
import style from './style.scss';
/**
 * List titles by different categories and filters
 */
export default class TitleList extends Component {
  apiKey = '87dfa1c669eea853da609d4968d294be';

  static PropTypes = {
    /**
     * @property {string} url API URL from themoviedb.com
     */
    url: PropTypes.string,

    /**
     * @property {string} title List's title
     */
    title: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      data: [],
      mounted: false
    };
  }

  loadContent() {
    var requestUrl = 'https://api.themoviedb.org/3/' + this.props.url + '&api_key=' + this.apiKey;
    fetch(requestUrl).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({ data: data });
    }).catch((err) => {
      console.log("There has been an error");
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url && nextProps.url !== '') {
      this.setState({ mounted: true, url: nextProps.url }, () => {
        this.loadContent();
      });

    }
  }

  componentDidMount() {
    if (this.props.url !== '') {
      this.loadContent();
      this.setState({ mounted: true });
    }
  }

  render() {
    var titles = '';
    if (this.state.data.results) {
      titles = this.state.data.results.map(function (title, i) {
        if (i < 5) {
          var name = '';
          var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
          if (!title.name) {
            name = title.original_title;
          } else {
            name = title.name;
          }

          return (
            <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
          );

        } else {
          return (<div key={title.id}></div>);
        }
      });
    }

    return (
      <div
        ref={(r) => { this.titleCategory = r; }}
        className={style.TitleList} data-loaded={this.state.mounted}>
        <div className={style.Title}>
          <h1>{this.props.title}</h1>
          <div className={style['titles-wrapper']}>
            {titles}
          </div>
        </div>
      </div>
    );
  }
}
