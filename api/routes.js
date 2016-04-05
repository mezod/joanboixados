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
    var newMatches = matches.map(obj => ({
      path: obj,
      description: obj.split('/')[3].split('-').slice(1).join('-').split('.')[0],
    }));

    this.response.body = newMatches;
  },
};
