import React from 'react';
import {fetchImages} from 'requests/requests';
import config from 'config';
import * as Components from 'components';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: [], currentImage: null};
  }

  componentWillMount() {
    const url = this.props.params.gallery || 'Photography';
    fetchImages(url).then(res => {
      const newRes = res.map(obj => ({
        path: 'http://' + config.apiUrl + '/' + obj.path,
        pathbig: 'http://' + config.apiUrl + '/' + obj.pathbig,
        date: obj.date,
        description: obj.description,
      }));
      this.setState({images: newRes});
      return newRes;
    });
  }
  componentDidMount() {
    window.addEventListener('reset', this.back.bind(this));
  }
  componentWillUpdate(nextProps) {
    if (this.props.params.gallery !== nextProps.params.gallery) {
      const url = nextProps.params.gallery || 'Photography';
      fetchImages(url).then(res => {
        const newRes = res.map(obj => ({
          path: 'http://' + config.apiUrl + '/' + obj.path,
          pathbig: 'http://' + config.apiUrl + '/' + obj.pathbig,
          date: obj.date,
          description: obj.description,
        }));
        this.setState({images: newRes});
        return newRes;
      });
      this.setState({currentImage: null});
    }
  }
  componentWillUnmount() {
    window.removeEventListener('reset', this.back.bind(this));
  }
  showImage(i) {
    this.setState({currentImage: i});
  }
  prev() {
    const index = this.state.currentImage;
    const length = this.state.images.length;

    this.setState({currentImage: ((((index - 1) % length) + length) % length)});
  }
  next() {
    const index = this.state.currentImage;
    const length = this.state.images.length;

    this.setState({currentImage: ((((index + 1) % length) + length) % length)});
  }
  back() {
    this.setState({currentImage: null});
  }
  render() {
    return (
			<div className="gallery">
        { this.state.currentImage === null ?
          <div className="columns">
          { this.state.images.map((obj, i) => {
            return (<div className="gallery-item" key={i}>
                      <img src={obj.path}
                           onClick={this.showImage.bind(this, i)}/>
                      <div className="meta">
                        <a className="date">{obj.date}</a>
                        <a className="description">{obj.description}</a>
                      </div>
                    </div>);
          })}
          </div>
        :
          <div className="slideshow-wrapper">
           <Components.SlideShow
             img={this.state.images[this.state.currentImage]}
             prev={this.prev.bind(this)}
             next={this.next.bind(this)}
             back={this.back.bind(this)}/>
          </div>
        }
			</div>
		);
  }
}

Gallery.propTypes = {
  params: React.PropTypes.shape({
    gallery: React.PropTypes.string,
  }),
};

