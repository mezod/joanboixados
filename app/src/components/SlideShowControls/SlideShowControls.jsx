import React from 'react';

export default class SlideShowControls extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }
  render() {
    return (
			<div className="slideshow-controls">
        <a className="date">{this.props.img.date}</a>
        <a className="description">{this.props.img.description}</a>
        <a className="prev"
           onClick={this.props.prev.bind(this)}>PREV</a> / <a className="next"
           onClick={this.props.next.bind(this)}>NEXT</a>
        <a className="back"
           onClick={this.props.back.bind(this)}>BACK TO GALLERY</a>
			</div>
		);
  }
}

SlideShowControls.propTypes = {
  img: React.PropTypes.object,
  prev: React.PropTypes.func,
  next: React.PropTypes.func,
  back: React.PropTypes.func,
};
