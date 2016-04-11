const glob = require('glob');

module.exports = {
  * getMenu() {
    const pattern = 'api/galleries/*';

    const matches = glob.sync(pattern, {mark: true});

    // api/galleries/01-Photography => Photography
    var newMatches = matches.map(obj => {
      return obj.split('/')[2].split('-')[1];
    });

    this.response.body = newMatches;
  },

  * getGallery() {
    const pattern = 'api/galleries/**-' + this.params.gallery + '/*';

    const matches = glob.sync(pattern, {mark: true});

    // api/galleries/01-Photography => Photography
    var newMatches = matches.map(obj => {
      var pathbig = obj.split('/').slice(2);
      pathbig.splice(1, 0, 'big');
      pathbig = pathbig.join('/');

      return {
        path: obj.split('/').slice(2).join('/'),
        pathbig: pathbig,
        date: obj.split('/')[3].split('-').slice(1, 4).join('-'),
        description: obj.split('/')[3].split('-').slice(4).join('-').split('.')[0],
      };
    }).filter(obj => {
      return (obj.path.split('/')[1] !== 'big');
    });

    this.response.body = newMatches;
  },
};
