/* NEW PROJECT TEMPLATE

<div className="project">
  <a href="">
    <img className="media" src=""/>
  </a>
  <a className="title" href="">Project</a>
  <p className="description">
    A project description.
  </p>
</div>

*/

import React from 'react';
import listlogs from '../../../images/listlogs.jpg';
import multikanban from '../../../images/multikanban.jpg';
import artbycontrast from '../../../images/artbycontrast.jpg';
import qolle from '../../../images/qolle.jpg';
import oldportfolio from '../../../images/old.jpg';
import galeriacontrast from '../../../images/galeriacontrast.jpg';
import pfc from '../../../images/pfc.jpg';
import bergen from '../../../images/bergen.jpg';

export default class Projects extends React.Component {
  componentWillMount() {
  }
  render() {
    return (
			<div className="projects">
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://www.listlogs.com"
               target="_blank">
              <img className="media" src={listlogs}/>
            </a>
          </div>
          <a className="title" href="http://www.listlogs.com"
             target="_blank">Listlogs</a>
          <p className="description">
            A social bookmarking tool that allows you to create lists
            of movies, bookmarks or whatever you like and follow others'
            lists. Developed with React / Redux / Koa / Webpack / SASS /
            Bookshelf / MySQL / API REST.
            Follow me!
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://www.multikanban.com"
               target="_blank">
              <img className="media" src={multikanban}/>
            </a>
          </div>
          <a className="title" href="http://www.multikanban.com"
             target="_blank">Multikanban</a>
          <p className="description">
            A simple kanban for multiple personal projects. Organize yourself.
            Get things done. Feel good. Developed with Backbone / Marionette /
            RequireJS / Grunt / LESS / Silex / API REST / MySQL.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://www.artbycontrast.com"
               target="_blank">
              <img className="media" src={artbycontrast}/>
            </a>
          </div>
          <a className="title" href="http://www.artbycontrast.com"
             target="_blank">Art by Contrast</a>
          <p className="description">
            The website for the new project of Galeria Contrast, Art by Contrast.
            Developed a full CMS for art galleries with Symfony2 / MySQL.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="https://vimeo.com/80202692"
               target="_blank">
              <img className="media" src={qolle}/>
            </a>
          </div>
          <a className="title" href="https://vimeo.com/80202692"
             target="_blank">Qolle</a>
          <p className="description">
            Microblogging platform with a big emphasis on data categorization
            merging the concepts of hierarchies and lists. Listlogs' grandpa.
            Developed with Symfony2 / Angular / MongoDB.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://old.joanboixados.com/ca/photography"
               target="_blank">
              <img className="media" src={oldportfolio}/>
            </a>
          </div>
          <a className="title" href="http://old.joanboixados.com/ca/photography"
             target="_blank">Old Portfolio</a>
          <p className="description">
            My old portfolio. I still love the design. Developed with Symfony2.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://www.galeriacontrast.com"
               target="_blank">
              <img className="media" src={galeriacontrast}/>
            </a>
          </div>
          <a className="title" href="http://www.galeriacontrast.com"
             target="_blank">Galeria Contrast</a>
          <p className="description">
            Another instance (the original) of the CMS I developed for galleries.
            It is developed with Symfony2 and MySQL.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://upcommons.upc.edu/bitstream/handle/2099.1/16388/82326.pdf?sequence=1"
               target="_blank">
              <img className="media" src={pfc}/>
            </a>
          </div>
          <a className="title" href="http://upcommons.upc.edu/bitstream/handle/2099.1/16388/82326.pdf?sequence=1"
             target="_blank">PFC (Final Degree Project)</a>
          <p className="description">
            Evaluating the usability of a Tag-based, Multi-faceted Knowledge
            Organization System. My final degree project on KMS and social
            bookmarking. Developed in Java / vanilla js.
          </p>
        </div>
        <div className="project">
          <div className="dummy-wrapper">
            <div className="dummy"></div>
            <a href="http://bergen.joanboixados.com"
               target="_blank">
              <img className="media" src={bergen}/>
            </a>
          </div>
          <a className="title" href="http://bergen.joanboixados.com"
             target="_blank">Joan i Bergen</a>
          <p className="description">
            My blog from my year in Bergen in 2010-11. It's good for when I get
            nostalgic. Raw HTML / JS / CSS.
          </p>
        </div>
			</div>
		);
  }
}
