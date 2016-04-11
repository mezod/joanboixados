import React from 'react';
import * as Components from 'components';

export default class SlideShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  render() {
    return (
			<div className="slideshow">
        <div className="image-wrapper">
          <img src={this.props.img.pathbig}/>
          <div className="prev" onClick={this.props.prev.bind(this)}></div>
          <div className="next" onClick={this.props.next.bind(this)}></div>
        </div>
        <Components.SlideShowControls
          img={this.props.img}
          prev={this.props.prev}
          next={this.props.next}
          back={this.props.back}/>
			</div>
		);
  }
}

SlideShow.propTypes = {
  img: React.PropTypes.object,
  prev: React.PropTypes.func,
  next: React.PropTypes.func,
  back: React.PropTypes.func,
};
