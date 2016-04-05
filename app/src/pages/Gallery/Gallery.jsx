import React from 'react';
import {fetchImages} from 'requests/requests';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {images: []};
  }

  componentWillMount() {
    const url = this.props.params.gallery || 'Photography';
    fetchImages(url).then(res => {
      this.setState({images: res});
      return res;
    });
  }
  componentWillUpdate() {
    const url = this.props.params.gallery || 'Photography';
    fetchImages(url).then(res => {
      this.setState({images: res});
      return res;
    });
  }
  render() {
    return (
			<div className="gallery">
        { this.state.images.map((obj) => {
          return <img src={obj.path}/>;
        }) }
			</div>
		);
  }
}

Gallery.propTypes = {
  params: React.PropTypes.shape({
    gallery: React.PropTypes.string,
  }),
};
