import React from 'react';
import {fetchImages} from 'requests/requests';
import config from 'config';
import * as Components from 'components';
import { withRouter } from 'react-router';

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
      if (this.props.params.currentImage) {
        this.setState({currentImage: this.props.params.currentImage});
      }
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
    this.props.router.push('/' + this.props.params.gallery + '/' + i);
  }
  prev() {
    let index = this.state.currentImage;
    const length = this.state.images.length;
    index = ((((index - 1) % length) + length) % length);

    this.setState({currentImage: index});
    this.props.router.push('/' + this.props.params.gallery + '/' + index);
  }
  next() {
    let index = this.state.currentImage;
    const length = this.state.images.length;
    index = ((((index + 1) % length) + length) % length);

    this.setState({currentImage: index});
    this.props.router.push('/' + this.props.params.gallery + '/' + index);
  }
  back() {
    this.setState({currentImage: null});
    this.props.router.push('/' + this.props.params.gallery);
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
    currentImage: React.PropTypes.number,
  }),
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Gallery);
