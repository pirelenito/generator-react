# <%= appname %>

Get the AMD module located at `dist/<% slug %>.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    '<%= libname %>': '<% slug %>'
  }
});

require(['react', '<%= libname %>'], function(React, <%= libname %>) {

  React.renderComponent(
    <%= libname %>(),
    document.getElementById('widget-container')
  );

});
```

## Contributing

To lint the code:

```bash
npm test
```

To install dependencies and build the dist:

```bash
npm install
```

To start the development server

```bash
npm start
```
