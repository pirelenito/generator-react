'use strict';
var yeoman = require('yeoman-generator');


var ComponentGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    console.log('Generating component ' + this.name + '.');
    this.componentslug = this._.slugify(this.name);
    this.componentfunction = this._.capitalize(this._.camelize(this._.slugify(this._.humanize(this.name))));
  },

  files: function () {
    this.template('_component.jsx', 'app/components/' + this.componentslug + '/' + this.componentslug + '.jsx');
    this.template('_component.scss', 'app/components/' + this.componentslug + '/' + this.componentslug + '.scss');
  }
});


module.exports = ComponentGenerator;
